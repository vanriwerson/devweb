import { useEffect, useState } from "react";
import iconClasses from "../utils/iconClasses";

const SM_SCREEN_WIDTH = 600;
const MD_SCREEN_WIDTH = 720;
const LG_SCREEN_WIDTH = 840;

const useIconsPerPage = () => {
  const [iconsPerPage, setIconsPerPage] = useState(6);
  const [classes, setClasses] = useState(iconClasses.xs);

  useEffect(() => {
    const updateIconsPerPage = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= SM_SCREEN_WIDTH) {
        setIconsPerPage(6);
        setClasses(iconClasses.xs);
      } else if (screenWidth <= MD_SCREEN_WIDTH) {
        setIconsPerPage(8);
        setClasses(iconClasses.sm);
      } else if (screenWidth <= LG_SCREEN_WIDTH) {
        setIconsPerPage(10);
        setClasses(iconClasses.md);
      } else {
        setIconsPerPage(12);
        setClasses(iconClasses.lg);
      }
    };

    updateIconsPerPage();

    const handleResize = () => {
      updateIconsPerPage();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return [iconsPerPage, classes];
}

export default useIconsPerPage;