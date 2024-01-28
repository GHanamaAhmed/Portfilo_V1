import Link from "next/link";
import React from "react";

export default function NavBarPages() {
  return (
    <ul className="flex justify-between md:flex-row flex-col items-start md:items-center my-4 md:my-0 px-3 md:px-0 w-fit gap-4 md:gap-10">
      <li className="text-darkContent dark:text-lightContent cursor-pointer">
        <Link href={"/"}>Home</Link>
      </li>
      <li className="text-darkContent dark:text-lightContent cursor-pointer">
        <Link href={"/about"}>About</Link>
      </li>
      <li className="text-darkContent dark:text-lightContent cursor-pointer">
        <Link href={"/tech-stack"}>Tech Stack</Link>
      </li>
      <li className="text-darkContent dark:text-lightContent cursor-pointer">
        <Link href={"/projects"}>Project</Link>
      </li>
      <li className="text-darkContent dark:text-lightContent cursor-pointer">
        <Link href={"/contact"}>Contact</Link>
      </li>
    </ul>
  );
}
