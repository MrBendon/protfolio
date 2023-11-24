import { useEffect, useRef } from "react";

export default function useClickOutSide(ClickFn) {
  // console.log(ClickFn);
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        // console.log("Click OutSide");
        ClickFn();
      }
    }

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ClickFn]);

  return ref;
}
