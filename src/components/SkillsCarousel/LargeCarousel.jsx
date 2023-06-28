import PropTypes from 'prop-types';
import SkillIcon from "../SkillIcon";

function LargeCarousel({ icons, iconsPerPage }) {
  return (
    <div className='image-wraper' style={{ width: `${iconsPerPage * 60 }px` }}>
      <SkillIcon icon={icons[0]} iconClass='fade' />
      <SkillIcon icon={icons[1]} iconClass='slide' />
      <SkillIcon icon={icons[2]} iconClass='slide' />
      <SkillIcon icon={icons[3]} iconClass='slide' />
      <SkillIcon icon={icons[4]} iconClass='md out' />
      <SkillIcon icon={icons[5]} iconClass='lg' />
      <SkillIcon icon={icons[6]} iconClass='md in' />
      <SkillIcon icon={icons[7]} iconClass='sm in' />
      <SkillIcon icon={icons[8]} iconClass='slide' />
      <SkillIcon icon={icons[9]} iconClass='slide' />
      <SkillIcon icon={icons[10]} iconClass='slide' />
      <SkillIcon icon={icons[11]} iconClass='hidden' />
    </div>
  );
}

const icon = PropTypes.shape({
  id: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string
}).isRequired 

LargeCarousel.propTypes = {
  icons: PropTypes.arrayOf(icon),
  iconsPerPage: PropTypes.number.isRequired,
};

export default LargeCarousel;
