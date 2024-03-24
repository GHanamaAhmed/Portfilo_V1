"use client";
import useDarkMode from "@/hooks/useDarkMode";
import { memo } from "react";
export default memo(function DarkMode() {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <div>
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label
        onClick={toggleTheme as () => void}
        htmlFor="checkbox"
        className="label"
      >
        <img
          src="./img/icons8-moon-and-stars-96.png"
          alt=""
          className="fas fa-moon"
          width={15}
        />
        <img
          src="./img/icons8-summer-94.png"
          alt=""
          className="fas fa-sun"
          width={15}
        />
        <div className={`ball ${theme == "dark" ? "translate-x-6" : ""}`}></div>
      </label>
    </div>
  );
});
