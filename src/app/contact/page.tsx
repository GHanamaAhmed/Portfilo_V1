import React from "react";
import Footer from "@/components/footer";
import Contacts from "@/app/_components/contacts";
export default function page() {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className="pt-28 md:pt20">
        <p className="text-solidHeading dark:text-SolidHeadingDarkMode text-lg md:text-4xl font-bold">
          For any questions please mail us:
        </p>
        <p className="block text-gradiant text-base md:text-3xl font-bold">
          ghanamaahmed@gmail.com
        </p>
      </div>
      <footer className="h-fit w-full">
        <Contacts />
        <Footer />
      </footer>
    </div>
  );
}
