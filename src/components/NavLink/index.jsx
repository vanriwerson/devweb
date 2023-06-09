import PropTypes from 'prop-types';
import './style.css';

function Navlink({ navTo, icon, clickHandler }) {
  const capitalize = (word) => `${word[0].toUpperCase()}${word.slice(1)}`;

  return (
    <li>
      <a
        href={ `#${navTo}` }
        className='link'
        onClick={ clickHandler }
      >
        { icon && (
          <img
            className='nav-icon'
            src={ icon }
            alt={ `${capitalize(navTo)} navigation icon` }
          />
        ) }
        { capitalize(navTo) }
      </a>
    </li>
  );
}

Navlink.propTypes = {
  navTo: PropTypes.string.isRequired,
  icon: PropTypes.string,
  clickHandler: PropTypes.func,
};

export default Navlink;