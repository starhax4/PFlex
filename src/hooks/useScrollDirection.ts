import { useState, useEffect } from "react";

export const useScrollDirection = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 100) {
        // Only hide after scrolling 100px
        if (window.scrollY > lastScrollY) {
          setShow(false); // Scrolling down
        } else {
          setShow(true); // Scrolling up
        }
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return { show, setShow };
};
