import React from "react";
import TitleSection from "@/components/titleSection";
import Skills from "@/components/tech/skills";

export default function page() {
  return (
    <div className="flex h-screen items-center justify-center w-full gap-3 py-24 md:py-28">
      <div className="w-10/12 flex justify-start items-center gap-4">
        <div className="w-full flex flex-col gap-2">
          <TitleSection
            title="Tech Stack"
            subTitle={"Technologies I’ve been working with recently"}
          />
          <Skills
            className={"w-full"}
            grid={{
              rows: 4,
              fill: "row",
            }}
            slidesPerView={4}
            breakpoints={{
              650: {
                grid: {
                  fill: "row",
                },
                slidesPerView: 5,
              },
              950: {
                grid: {
                  fill: "row",
                },
                slidesPerView: 6,
              },
              1200: {
                grid: {
                  fill: "row",
                },
                slidesPerView: 7,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
