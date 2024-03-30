import { memo } from "react";
import Tech from "@/components/tech/tech";
import Project from "@/components/projects/projects";
import Contacts from "./_components/contacts";
import Footer from "@/components/footer";
export default memo(function page() {
  reurn (
    <>
      <div>
        <div className="flex flex-col items-center w-full gap-3 py-24 md:py-28 lg:py-36 md:flex-row-reverse md:justify-around lg:px-28">
          <img
            className="w-[200px] md:w-[250px]"
            src="./img/50353683 1.png"
            alt=""
          />
          <div className="w-2/3 md:w-fit text-justify text-solidHeading text-xl font-bold md:text-4xl">
            <p className="inline md:block dark:text-textLight">Hi 👋,</p>
            <p className="inline md:block dark:text-textLight">My name is </p>
            <p className="inline md:block text-gradiant">Ahmed GH </p>
            <p className="inline md:block dark:text-textLight">
              Full Stack Developer
            </p>
          </div>
        </div>
        <Tech />
        <Project widthContainer={"w-10/12"} textAlign={"items-center"} />
        <Contacts />
      </div>
      <Footer />
    </>
  );
});
