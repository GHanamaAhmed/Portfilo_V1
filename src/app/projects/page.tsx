import Project from "@/components/projects/projects";
import React from "react";

export default function page() {
  return (
    <div className="flex items-center justify-center w-full gap-3 py-24 md:py-28">
      <div className="w-10/12 flex justify-start items-center gap-4">
        <div className="w-full flex flex-col gap-2">
          <Project textAlign={"text-start"} widthContainer={"w-full"} />
        </div>
      </div>
    </div>
  );
}
