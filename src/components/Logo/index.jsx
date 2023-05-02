import LogoIcon from '../LogoIcon';
import './style.css';

function Logo() {
  return (
    <a href="#home" className="logo-container">
      <LogoIcon />

      <p className="logo-text">
        <span className="logo-main">BRS</span>
        <span className="logo-sub">DevWeb</span>
      </p>
    </a>
  );
}

export default Logo;
