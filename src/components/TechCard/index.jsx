import PropTypes from 'prop-types';
import './style.css';

function TechCard ({ tech }) {
  return (
    <div className='tech-details-wrapper'>
      <img
        className='tech-img'
        src={ tech.src }
        alt={ `${tech.alt} icon` }
      />

      <p className='content'>{ tech.summary }</p>
      
      <a href={ tech.doc } target='_blank' rel='noreferrer'>Conheça!</a>
    </div>
  );
}

TechCard.propTypes = {
  tech: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    summary: PropTypes.string,
    doc: PropTypes.string,
  }).isRequired,
};

export default TechCard;
