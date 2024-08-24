import { useState } from "react";

const useResize = () => {
  const [size, setSize] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setSize(window.innerWidth);
  });
  const isMobile = size <= 768;
  return { isMobile };
};

export default useResize;
