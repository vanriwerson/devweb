import PropTypes from 'prop-types';
import './style.css';

function Navlink({ navTo }) {
  const capitalize = (word) => `${word[0].toUpperCase()}${word.slice(1)}`;

  return (
    <li>
      <a
        href={ `#${navTo}` }
        className='link'
      >
        { navTo === 'top' ? 'Home' : capitalize(navTo) }
      </a>
    </li>
  );
}

Navlink.propTypes = {
  navTo: PropTypes.string.isRequired,
};

export default Navlink;