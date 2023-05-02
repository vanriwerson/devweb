import PropTypes from 'prop-types';
import logoIcon from '../../assets/images/logo-light.svg';
import './style.css';

function SectionDivider({ anchorRef }) {
  return (
    <div className="divider-container" id={ anchorRef }>
      <span className='divider-line left'></span>
      <img
        className='logo-icon'
        src={ logoIcon }
        alt='BRS DevWeb logo'
      />
      <span className='divider-line right'></span>
    </div>
  );  
}

SectionDivider.propTypes = {
  anchorRef: PropTypes.string.isRequired,
}

export default SectionDivider;
