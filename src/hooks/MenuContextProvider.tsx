"use client"
import React, { createContext, useCallback, useState } from "react";
type menuContextProps = {
  isMenuActive: boolean;
  setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
};
export const menuContext = createContext<menuContextProps>({
  isMenuActive: false,
  setIsMenuActive: () => {},
});
const MenuContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <menuContext.Provider value={{ isMenuActive, setIsMenuActive }}>
      {children}
    </menuContext.Provider>
  );
};
export default MenuContextProvider;
