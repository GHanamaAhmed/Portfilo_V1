"use client";
import TitleSection from "../titleSection";
import ProjectCard from "./projectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import projects from "@/data/projects.json";
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
        <div className={`${widthContainer} flex justify-center`}>
          <div className="grid-cols-1 justify-items-center grid md:grid-cols-2 lg:grid-cols-3 content-between w-full gap-y-3">
            {projects.map((e, i) => (
              <ProjectCard
                key={i}
                img={e.img}
                title={e.title}
                description={e.description}
                tech={e.tech}
                url={e.url}
                urlGithub={e.urlGithub}
              />
            ))}
          </div>
          {/* <Swiper
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
            {
              projects.map((e, i) => (
                <SwiperSlide key={i} className="content-center flex justify-center">
                  <ProjectCard
                    img={e.img}
                    title={e.title}
                    description={e.description}
                    tech={e.tech}
                    url={e.url}
                    urlGithub={e.urlGithub}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper> */}
        </div>
      </div>
    </div>
  );
}
