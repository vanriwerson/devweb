import { useState, useEffect } from 'react';
import skillIcons from '../../assets/images/skillIcons';
import SkillIcon from '../SkillIcon';
import './style.css';

const CAROUSEL_REFRESH_TIME = 3000;

function SkillsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lastIndex = skillIcons.length - 1;

  const firstIcon = skillIcons[currentIndex === 0 ? lastIndex : currentIndex - 1];
  const secondIcon = skillIcons[currentIndex];
  const thirdIcon = skillIcons[currentIndex === lastIndex ? 0 : currentIndex + 1];
  const fourthIcon = skillIcons[currentIndex === lastIndex - 1 ? 0 
    : currentIndex === lastIndex ? 1 : currentIndex + 2];
  
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
      <div className='image-wraper'>
        <SkillIcon icon={ firstIcon } iconClass="first" />
        <SkillIcon icon={ secondIcon } iconClass="second" />
        <SkillIcon icon={ thirdIcon } iconClass="third" />
        <SkillIcon icon={ fourthIcon } iconClass="fourth" />
      </div>
    </section>
  );
}

export default SkillsCarousel;
