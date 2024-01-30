"use client";
import React from "react";
import { Grid, Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper, SwiperProps } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/autoplay";
import Image from "next/image";
import skils from "@/data/techStack.json";
type SkillsProps = {
  className: string;
  breakpoints?: SwiperProps["breakpoints"];
  grid?: SwiperProps["grid"];
  slidesPerView?: SwiperProps["slidesPerView"];
};
export default function Skills({
  className,
  breakpoints,
  grid,
  slidesPerView,
}: SkillsProps) {
  return (
    <div className={className}>
      <Swiper
        className="w-full"
        modules={[Grid, Autoplay]}
        spaceBetween={50}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        grid={grid}
        slidesPerView={slidesPerView}
        breakpoints={breakpoints}
      >
        {skils.map((e, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-11 h-11 md:w-[88px] md:h-[88px]">
              <Image fill src={e.path} alt={e.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
