import PropTypes from 'prop-types';
import './style.css';

function SkillIcon ({ icon, iconClass }) {
  return (
    <div className="icon-container">
      <img
        key={ icon.id }
        className={ `icon ${ iconClass }` }
        src={ icon.src }
        alt={ `${icon.alt} icon` }
      />
    </div>
  );
}

SkillIcon.propTypes = {
  icon: PropTypes.shape({
    id: PropTypes.number,
    src: PropTypes.string,
    alt: PropTypes.string
  }).isRequired,
  iconClass: PropTypes.string.isRequired,
};

export default SkillIcon;
