import logoLight from '../../assets/images/logo-light.svg';
import './style.css';

function Logo() {
  return (
    <a href="#home" className="logo-container">
      <img
        className='logo'
        src={ logoLight }
        alt='BRS - DevWeb light logo'
      />
      <p className="logo-text">
        <span className="logo-main">BRS</span>
        <span className="logo-sub">DevWeb</span>
      </p>
    </a>
  );
}

export default Logo;
