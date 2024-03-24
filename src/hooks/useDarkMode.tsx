"use client";
import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState("light");
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode: string) => {
    localStorage.theme = mode;
    document.documentElement.classList.remove(
      mode == "dark" ? "light" : "dark"
    );
    document.documentElement.classList.add(mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
      document.documentElement.classList.remove(
        localTheme == "dark" ? "light" : "dark"
      );
      document.documentElement.classList.add(localTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setMode(prefersDark ? "dark" : "light");
    }
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};

export default useDarkMode;
