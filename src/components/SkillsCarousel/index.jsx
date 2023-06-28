import { useState, useEffect } from 'react';
import skillIcons from '../../assets/images/skillIcons';
import SkillIcon from '../SkillIcon';
import MediumCarousel from './MediumCarousel';
import LargeCarousel from './LargeCarousel';
import useCarouselIcons from '../../hooks/useCarouselIcons';
import './style.css';

const CAROUSEL_REFRESH_TIME = 3000;

function SkillsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [iconsPerPage, visibleIcons, classes] = useCarouselIcons(currentIndex);

  const renderIcons = (icons) => {
    if (iconsPerPage === 10) {
      return (
        <MediumCarousel icons={ icons } iconsPerPage={ iconsPerPage } />
      );
    }

    if (iconsPerPage === 12) {
      return (
        <LargeCarousel icons={ icons } iconsPerPage={ iconsPerPage } />
      );
    }
    
    return (
      <div className='image-wraper' style={{ width: `${iconsPerPage * 60 }px` }}>
        { icons.map((icon, i) => (
          <SkillIcon key={icon.id} icon={icon} iconClass={ classes[i] } />
        )) }
      </div>
    );
  }
  
  useEffect(() => {
    const updateIconsList = () => {
      const lastIndex = skillIcons.length - 1;
      const nextIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
      setCurrentIndex(nextIndex);
    };

    const interval = setInterval(() => {
      updateIconsList();
    }, CAROUSEL_REFRESH_TIME);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className='carousel-container'>
      { renderIcons(visibleIcons) }
    </section>
  );
}

export default SkillsCarousel;
