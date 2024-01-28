"use client";
import React, { useLayoutEffect, useState } from "react";
export default function useDarkMode() {
  const [theme, setTheme] = useState<"dark" | "light">();
  useLayoutEffect(() => {
    if (
      theme == "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [theme]);
  const toglgeDarkMode = () => {
    setTheme((prevValue) => (theme == "dark" ? "light" : "dark"));
  };
  return { theme, toglgeDarkMode };
}
