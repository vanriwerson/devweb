import PropTypes from 'prop-types';
import SkillIcon from "../SkillIcon";

function MediumCarousel({ icons, iconsPerPage }) {
  return (
    <div className='image-wraper' style={{ width: `${iconsPerPage * 60 }px` }}>
      <SkillIcon icon={icons[0]} iconClass='fade' />
      <SkillIcon icon={icons[1]} iconClass='slide' />
      <SkillIcon icon={icons[2]} iconClass='slide' />
      <SkillIcon icon={icons[3]} iconClass='md out' />
      <SkillIcon icon={icons[4]} iconClass='lg' />
      <SkillIcon icon={icons[5]} iconClass='md in' />
      <SkillIcon icon={icons[6]} iconClass='sm in' />
      <SkillIcon icon={icons[7]} iconClass='slide' />
      <SkillIcon icon={icons[8]} iconClass='slide' />
      <SkillIcon icon={icons[9]} iconClass='hidden' />
    </div>
  );
}

const icon = PropTypes.shape({
  id: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string
}).isRequired 

MediumCarousel.propTypes = {
  icons: PropTypes.arrayOf(icon),
  iconsPerPage: PropTypes.number.isRequired,
};

export default MediumCarousel;
