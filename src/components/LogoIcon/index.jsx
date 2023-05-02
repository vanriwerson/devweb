import logoLight from '../../assets/images/logo-light.svg';
import './style.css';

function LogoIcon() {
  return (
    <img
      className='main-logo'
      src={ logoLight }
      alt='BRS - DevWeb light logo'
    />
  );
}

export default LogoIcon;
