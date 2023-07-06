import { useEffect, useRef, useState } from 'react';
import MenuDrawer from '../MenuDrawer';
import Navlink from '../NavLink';
import navLinks from '../../utils/navLinks';
import './style.css';

function NavigationMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);  

  const menuRef = useRef();
  
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <section className='menu-container' ref={ menuRef }>
      <MenuDrawer
        drawerOpen={ menuOpen }
        toggleDrawer={ toggleMenu }
      >
        <ul className={ menuOpen ? 'links-container active' : 'links-container' }>
          {navLinks.map((link) => (
            <Navlink
              key={ link.id }
              navTo={ link.navTo }
              icon={ link.icon }
              clickHandler={ () => setMenuOpen(false) }
            />
          ))}
        </ul>
      </MenuDrawer>
    </section>
  );
}

export default NavigationMenu;
