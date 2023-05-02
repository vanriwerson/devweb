import PropTypes from 'prop-types';
import './style.css';

function ToggleButton ({ menuOpen, clickHandler }) {
  return (
    <button
      className={ menuOpen ? 'toggle-button active' : 'toggle-button' }
      onClick={ clickHandler }
    >
      <span className='line up'></span>
      <span className='line'></span>
      <span className='line down'></span>
    </button>
  );
}

ToggleButton.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
}

export default ToggleButton;
