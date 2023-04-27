import { useState, useEffect, useRef } from 'react';
import navLinks from '../../assets/images/navLinks';
import './style.css';
import Navlink from '../NavLink';

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
      <button
        className={ menuOpen ? 'toggle-button active' : 'toggle-button' }
        onClick={ toggleMenu }
      >
        <div className='line up'></div>
        <div className='line'></div>
        <div className='line down'></div>
      </button>
      <nav className={menuOpen ? 'links active' : 'links'}>
        <ul>
          { navLinks.length && navLinks.map((link) => {
            return (
              <Navlink
                key={ link.id }
                navTo={ link.navTo }
                icon={ link.icon }
              />
            );
          })}
        </ul>
      </nav>
    </section>
  );
}

export default NavigationMenu;
