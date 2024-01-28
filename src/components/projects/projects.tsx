"use client";
import TitleSection from "../titleSection";
import ProjectCard from "./projectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { A11y, Navigation } from "swiper/modules";
type ProjectProps = {
  textAlign: string;
  widthContainer: string;
};
export default function Project({ textAlign, widthContainer }: ProjectProps) {
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <TitleSection
        title={"Projects"}
        subTitle={"Things I’ve built so far"}
        textAlign={textAlign}
      />
      <div className="w-full flex justify-around">
        <div className="w-full hidden md:flex flex-col items-center gap-5">
          <div className={`${widthContainer} flex gap-y-5 justify-between`}>
            <ProjectCard
              img={"./img/Rectangle 4.png"}
              title={"Project Tile goes here"}
              description={
                "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
              }
              tech={"HTML , JavaScript, SASS, React"}
              url={""}
              urlGithub={""}
            />
            <ProjectCard
              img={"./img/Rectangle 6.png"}
              title={"Project Tile goes here"}
              description={
                "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
              }
              tech={"HTML , JavaScript, SASS, React"}
              url={""}
              urlGithub={""}
            />
            <ProjectCard
              img={"./img/Rectangle 8.png"}
              title={"Project Tile goes here"}
              description={
                "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
              }
              tech={"HTML , JavaScript, SASS, React"}
              url={""}
              urlGithub={""}
            />
          </div>
          <div className={`${widthContainer} flex gap-y-5 justify-between`}>
            <ProjectCard
              img={"./img/Rectangle 12.png"}
              title={"Project Tile goes here"}
              description={
                "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
              }
              tech={"HTML , JavaScript, SASS, React"}
              url={""}
              urlGithub={""}
            />
            <ProjectCard
              img={"./img/Rectangle 13.png"}
              title={"Project Tile goes here"}
              description={
                "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
              }
              tech={"HTML , JavaScript, SASS, React"}
              url={""}
              urlGithub={""}
            />
            <ProjectCard
              img={"./img/Rectangle 14.png"}
              title={"Project Tile goes here"}
              description={
                "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
              }
              tech={"HTML , JavaScript, SASS, React"}
              url={""}
              urlGithub={""}
            />
          </div>
        </div>
        <div className={`md:hidden ${widthContainer} flex justify-center`}>
          <Swiper
            className="w-full"
            modules={[Navigation, A11y]}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide className="content-center flex justify-center">
              <ProjectCard
                img={"./img/Rectangle 4.png"}
                title={"Project Tile goes here"}
                description={
                  "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                }
                tech={"HTML , JavaScript, SASS, React"}
                url={""}
                urlGithub={""}
              />
            </SwiperSlide>
            <SwiperSlide className="content-center flex justify-center">
              <ProjectCard
                img={"./img/Rectangle 6.png"}
                title={"Project Tile goes here"}
                description={
                  "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                }
                tech={"HTML , JavaScript, SASS, React"}
                url={""}
                urlGithub={""}
              />
            </SwiperSlide>
            <SwiperSlide className="content-center flex justify-center">
              <ProjectCard
                img={"./img/Rectangle 8.png"}
                title={"Project Tile goes here"}
                description={
                  "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                }
                tech={"HTML , JavaScript, SASS, React"}
                url={""}
                urlGithub={""}
              />
            </SwiperSlide>
            <SwiperSlide className="content-center flex justify-center">
              <ProjectCard
                img={"./img/Rectangle 12.png"}
                title={"Project Tile goes here"}
                description={
                  "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                }
                tech={"HTML , JavaScript, SASS, React"}
                url={""}
                urlGithub={""}
              />
            </SwiperSlide>
            <SwiperSlide className="content-center flex justify-center">
              <ProjectCard
                img={"./img/Rectangle 13.png"}
                title={"Project Tile goes here"}
                description={
                  "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                }
                tech={"HTML , JavaScript, SASS, React"}
                url={""}
                urlGithub={""}
              />
            </SwiperSlide>
            <SwiperSlide className="content-center flex justify-center">
              <ProjectCard
                img={"./img/Rectangle 14.png"}
                title={"Project Tile goes here"}
                description={
                  "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"
                }
                tech={"HTML , JavaScript, SASS, React"}
                url={""}
                urlGithub={""}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
