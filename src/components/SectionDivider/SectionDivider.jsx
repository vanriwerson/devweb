import PropTypes from 'prop-types';
import logoIcon from '../../assets/images/temp-logo.svg';
import './style.css';

function SectionDivider({ anchorRef }) {
  return (
    <div className="divider-container" id={ anchorRef }>
      <span className='divider-line'></span>
      <img
        className='logo-icon'
        src={ logoIcon }
        alt='BRS DevWeb logo'
      />
      <span className='divider-line'></span>
    </div>
  );  
}

SectionDivider.propTypes = {
  anchorRef: PropTypes.string.isRequired,
}

export default SectionDivider;
