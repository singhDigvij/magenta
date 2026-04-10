import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll (no conflict)
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    // Small delay → ensures DOM is ready for AOS
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, [pathname]);

  return null;
};

export { ScrollToTop };