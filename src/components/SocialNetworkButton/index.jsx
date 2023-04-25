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
  anchorLink: PropTypes.string,
  imageSource: PropTypes.string,
  altText: PropTypes.string,
}

export default SocialNetworkButton;
