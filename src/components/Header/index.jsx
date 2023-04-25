import Logo from '../Logo';
import NavigationMenu from '../NavigationMenu';
import './style.css';

function Header() {
  return (
    <header className="header">
      <Logo />
      <NavigationMenu />
    </header>
  );
}

export default Header;
