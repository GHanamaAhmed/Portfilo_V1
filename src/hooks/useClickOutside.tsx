import React, { useEffect } from "react";
type RefType = React.MutableRefObject<HTMLDivElement | null>;
type SetStateType = React.Dispatch<React.SetStateAction<boolean>>;

const useClickOutside = (ref: RefType, setIsMenuActive: SetStateType) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsMenuActive(false);
      } else {
        setIsMenuActive(true);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
export { useClickOutside };
