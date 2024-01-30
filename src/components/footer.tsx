import React from "react";
import NavBarPages from "./header/navBarPages";

export default function footer() {
  return (
    <div className="flex w-full justify-center items-center md:py-10">
      <div className="flex flex-col md:flex-row justify-between w-10/12">
        <div className="flex flex-row gap-0">
          <NavBarPages />
        </div>
        
      </div>
    </div>
  );
}
