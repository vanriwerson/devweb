import Logo from '../Logo';
import NavigationMenu from '../NavigationMenu';
import Navlink from '../NavLink';
import navLinks from '../../utils/navLinks';
import './style.css';

function Header() {
  return (
    <header className="header">
      <Logo />

      <ul className='large-links-container'>
        {navLinks.map((link) => (
          <Navlink
            key={ link.id }
            navTo={ link.navTo }
          />
        ))}
      </ul>

      <NavigationMenu />
    </header>
  );
}

export default Header;
