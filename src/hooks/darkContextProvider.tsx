"use client";
import React, { createContext, useEffect, useState } from "react";
import useDarkMode from "./useDarkMode";
type DarkContextProviderProps = {
  children: React.ReactNode;
};
type darkContextProps = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
const darkContext = createContext<darkContextProps | any>(null);

export default function DarkContextProvider({
  children,
}: DarkContextProviderProps) {
  const [loading, setLoading] = useState(true);
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  useEffect(() => {
    if (componentMounted) {
      setLoading(false);
    }
  });
  return (
    <darkContext.Provider value={{ loading, setLoading }}>
      {loading ? <div></div> : children}
    </darkContext.Provider>
  );
}

export { darkContext };
