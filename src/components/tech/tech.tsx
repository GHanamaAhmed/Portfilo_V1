import { memo } from "react";
import TitleSection from "../titleSection";
import Skills from "./skills";
export default memo(function Tech() {
  return (
    <div className="w-full flex flex-col items-center">
      <TitleSection
        title={"My Tech Stack"}
        subTitle={"Technologies I’ve been working with recently"}
        textAlign={"items-center"}
      />
      <Skills
        className={"w-4/6"}
        grid={{
          rows: 3,
          fill: "row",
        }}
        slidesPerView={3}
        breakpoints={{
          650: {
            grid: {
              fill: "row",
            },
            slidesPerView: 4,
          },
          950: {
            grid: {
              fill: "row",
            },
            slidesPerView: 5,
          },
          1200: {
            grid: {
              fill: "row",
            },
            slidesPerView: 6,
          },
        }}
      />
    </div>
  );
});
