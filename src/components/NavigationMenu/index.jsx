import { useState } from 'react';
import navLinks from '../../assets/textContent/navLinks';
import './style.css';

function NavigationMenu () {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const capitalize = (word) => `${word[0].toUpperCase()}${word.slice(1)}`;
  
  return (
    <section className='toggle-container'>
      <div
        className={menuOpen ? 'toggle-button active' : 'toggle-button'}
        onClick={ toggleMenu }
      >
        <div className='line'></div>
      </div>
      <nav className={menuOpen ? 'links active' : 'links'}>
        <ul>
          { navLinks.length && navLinks.map((link) => {
            return link === 'top' ? <li><a href='#top' className='link'>Home</a></li> :
            <li><a href={ `#${link}` } className='link'>{ capitalize(link) }</a></li>
          })}
        </ul>
      </nav>
    </section>
  );
}

export default NavigationMenu;