import PropTypes from 'prop-types';
import './style.css';

function Navlink({ navTo, icon }) {
  const capitalize = (word) => `${word[0].toUpperCase()}${word.slice(1)}`;

  return (
    <li>
      <a
        href={ `#${navTo}` }
        className='link'
      >
        <img
          className='nav-icon'
          src={ icon }
          alt={ `${capitalize(navTo)} navigation icon` }
        />
        { capitalize(navTo) }
      </a>
    </li>
  );
}

Navlink.propTypes = {
  navTo: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navlink;