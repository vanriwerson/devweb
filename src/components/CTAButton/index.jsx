import PropTypes from 'prop-types';
import './style.css';

function CTAButton({ labelText }) {
  const WHATSAPP_CONTACT = '55019991550438';

  return (
    <a
      className="cta-button"
      target="_blank"
      rel="noopener noreferrer"
      href={`https://api.whatsapp.com/send?phone=${WHATSAPP_CONTACT}`}
    >
      { labelText }
    </a>
  );  
}

CTAButton.propTypes = {
  labelText: PropTypes.string.isRequired,
}

export default CTAButton;
