import githubIcon from '../../assets/images/socials/github.png';
import linkedinIcon from '../../assets/images/socials/linkedin.png';
import Signature from '../Signature';
import SocialNetworkButton from '../SocialNetworkButton';
import './style.css';

function Footer() {  
  return (
    <footer className="footer">
      <SocialNetworkButton
        anchorLink="https://github.com/vanriwerson"
        imageSource={ githubIcon }
        altText="Github icon"
      />

      <SocialNetworkButton
        anchorLink="https://www.linkedin.com/in/bruno-riwerson/"
        imageSource={ linkedinIcon }
        altText="Linkedin icon"
      />

      <Signature />
    </footer>
  );
}

export default Footer;
