import { useState, useEffect, useRef } from 'react';
import Navlink from '../NavLink';
import ToggleButton from '../ToggleButton';
import navLinks from '../../assets/images/navLinks';
import './style.css';

function NavigationMenu () {
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
    <section className='toggle-container' ref={ menuRef }>
      <ToggleButton
        menuOpen={ menuOpen }
        clickHandler={ toggleMenu }
      />

      <ul className={menuOpen ? 'links-container active' : 'links-container'}>
        { navLinks.length && navLinks.map((link) => {
          return (
            <Navlink
              key={ link.id }
              navTo={ link.navTo }
              icon={ link.icon }
              clickHandler={ () => setMenuOpen(false) }
            />
          );
        })}
      </ul>
    </section>
  );
}

export default NavigationMenu;
