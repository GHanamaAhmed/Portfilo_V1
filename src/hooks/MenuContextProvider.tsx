"use client";
import React, { createContext, useCallback, useState } from "react";
import { useClickOutside } from "./useClickOutside";
type menuContextProps = {
  isMenuActive: boolean;
  handleMenu: () => void;
  setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
};
export const menuContext = createContext<menuContextProps>({
  isMenuActive: false,
  handleMenu: () => {},
  setIsMenuActive: () => {},
});
const MenuContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const handleMenu = useCallback(() => {
    setIsMenuActive((prev) => !prev);
  }, [setIsMenuActive]);
  return (
    <menuContext.Provider value={{ isMenuActive, handleMenu,setIsMenuActive }}>
      {children}
    </menuContext.Provider>
  );
};
export default MenuContextProvider;
