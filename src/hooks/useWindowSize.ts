import { TypeSize } from "@/types";
import { useState, useEffect } from "react";

export function useWindowSize(): TypeSize {
  const [windowSize, setWindowSize] = useState<TypeSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return windowSize;
}