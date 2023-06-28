import { useEffect, useMemo, useState } from "react";
import skillIcons from "../assets/images/skillIcons";
import iconClasses from "../utils/iconClasses";

const SM_SCREEN_WIDTH = 600;
const MD_SCREEN_WIDTH = 720;
const LG_SCREEN_WIDTH = 840;

const useCarouselIcons = (currentIndex) => {
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

  const visibleIcons = useMemo(() => {
    const startIndex = currentIndex;
    let endIndex = startIndex + iconsPerPage;
    let icons = skillIcons.slice(startIndex, endIndex);

    if (endIndex > skillIcons.length) {
      endIndex = endIndex % skillIcons.length;
      icons = [...icons, ...skillIcons.slice(0, endIndex)];
    }

    return icons;
  }, [currentIndex, iconsPerPage]);

  return [iconsPerPage, visibleIcons, classes];
}

export default useCarouselIcons;
