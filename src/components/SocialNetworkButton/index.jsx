import PropTypes from 'prop-types';
import './style.css';

function SocialNetworkButton(props) {  
  const { anchorLink, imageSource, altText } = props;
  
  return (
    <a className="social-link"
      href={ anchorLink }
      target="_blank"
      rel="noreferrer"
    >
      <img className="social-image"
        src={ imageSource }
        alt={ altText }
      />
    </a>
  );
}

SocialNetworkButton.propTypes = {
  anchorLink: PropTypes.string.isRequired,
  imageSource: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
}

export default SocialNetworkButton;
