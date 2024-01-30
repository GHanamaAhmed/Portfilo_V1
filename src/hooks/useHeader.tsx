"use client";
import { useContext, useEffect, useState } from "react";
import { menuContext } from "./MenuContextProvider";
export const useHeader = () => {
  const [positionScroll, setPositinScroll] = useState<number>(
    globalThis.screenY
  );
  const [headerPosition, setHeaderPosition] = useState<string>("");
  const { isMenuActive } = useContext(menuContext);
  useEffect(() => {
    const handlePosition = () => {
      if (positionScroll < window.scrollY) {
        if (isMenuActive == false) {
          setHeaderPosition("-translate-y-full");
        }
      } else {
        setHeaderPosition("");
      }
      setPositinScroll(window.scrollY);
    };
    window.addEventListener("scroll", handlePosition);
    return () => window.removeEventListener("scroll", () => {});
  }, []);
  return { headerPosition };
};
