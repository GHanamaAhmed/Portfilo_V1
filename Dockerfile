FROM node:20-alpine AS base

ENV NEXT_TELEMERTY_DISABLED=1

WORKDIR /app

FROM base AS dependencies

COPY package.json package-lock.json ./

RUN npm ci

FROM base AS build

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM base as run

ENV PORT=3000

ENV NODE_ENV=production

COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules

EXPOSE 3000

CMD [ "npm","start" ]