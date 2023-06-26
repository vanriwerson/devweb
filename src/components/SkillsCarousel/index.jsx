import { useState, useEffect } from 'react';
import skillIcons from '../../assets/images/skillIcons';
import SkillIcon from '../SkillIcon';
import './style.css';
import useIconsPerPage from '../../hooks/useIconsPerPage';

const CAROUSEL_REFRESH_TIME = 3000;

function SkillsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [iconsPerPage, classes] = useIconsPerPage();

  const startIndex = currentIndex;
  const endIndex = ((currentIndex + iconsPerPage -1) % skillIcons.length) + 1;

  let visibleIcons = skillIcons.slice(startIndex, endIndex);
  if (startIndex > endIndex) {
    visibleIcons = skillIcons.slice(startIndex);
    const overflow = iconsPerPage - visibleIcons.length;
    visibleIcons = [...visibleIcons, ...skillIcons.slice(0, overflow)];
  }

  const renderIcons = (icons) => {
    return (
      <div className='image-wraper' style={{ width: `${iconsPerPage * 60 }px` }}>
        { icons.map((icon, i) => (
          <SkillIcon key={icon.id} icon={icon} iconClass={ classes[i] } />
        )) }
      </div>
    );
  }
  
  useEffect(() => {
    const nextImage = () => {
      if (currentIndex === skillIcons.length-1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    };

    const interval = setInterval(() => {
      nextImage();
    }, CAROUSEL_REFRESH_TIME);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className='carousel-container'>
      {/* <div className='image-wraper'>
        {visibleIcons.map((icon) => (
          <SkillIcon key={icon.id} icon={icon} iconClass={''} />
        ))}
      </div> */}
      { renderIcons(visibleIcons) }
    </section>
  );
}

export default SkillsCarousel;
