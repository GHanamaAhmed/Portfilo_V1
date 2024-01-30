import React from "react";
import WorkExperience from "./workExperience";
import TitleSection from "@/components/titleSection";
import aboutMe from "@/data/aboutMe.json";

export default function About() {
  return (
    <div className="flex items-center justify-center w-full gap-3 py-24 md:py-28">
      <div className="w-10/12 flex justify-start items-center gap-4">
        <div className="flex flex-col gap-4 w-full md:w-2/3">
          <TitleSection title={"About Me"} textAlign={"items-start"} />
          <p className="text-darkContent dark:text-lightContent text-sm lg:text-base">
            {aboutMe.aboutMe}
          </p>
          <TitleSection title={"Work Experience"} textAlign={"items-start"} />
          {aboutMe.experience.map((e, i) => (
            <WorkExperience
              key={i}
              skill={e.skill}
              typeEmployment={e.typeEmployment}
              adress={e.address}
              location={e.location}
              dateBegin={e.dateBegin}
              dateEnd={e.dateEnd}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
              
        