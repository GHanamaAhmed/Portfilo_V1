"use client"
import React, { useContext } from "react";
import DarkMode from "./header/darkMode";
import NavBarPages from "./header/navBarPages";
import { menuContext } from "@/hooks/MenuContextProvider";
export default function Menu() {
  const { isMenuActive } = useContext(menuContext);
  return (
    <div className="w-full">
      <div
        className={`fixed w-4/6 h-full z-50 flex flex-col items-start top-0 duration-300 ${
          isMenuActive ? "" : "-translate-x-full"
        } py-3 bg-white dark:bg-darkMode md:hidden`}
      >
        <ul className="flex gap-2 w-full border-b pb-1">
          <li className="hover:bg-slate-500 px-3 py-1 text-darkContent dark:text-lightContent cursor-pointer">
            AR
          </li>
          <li className="hover:bg-slate-500 px-3 py-1 text-SolidHeadingDarkMode dark:text-lightContent cursor-pointer">
            FR
          </li>
        </ul>
        <div className="flex gap-5 px-3 mt-5">
          <p className="text-darkContent dark:text-lightContent cursor-pointer">
            Dark mode
          </p>
          <DarkMode />
        </div>
        <NavBarPages />
      </div>
      <div
        className={`absolute w-full h-full z-10 right-0 bg-black opacity-30 top-0 ${
          isMenuActive ? "" : "hidden"
        }`}
      ></div>
    </div>
  );
}
