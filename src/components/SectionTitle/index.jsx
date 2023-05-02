import PropTypes from 'prop-types';
import './style.css';

function SectionTitle ({ title }) {
  return (
    <h1 className='title-container'>
      <p className='title'>{ title }</p>
    </h1>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SectionTitle;
