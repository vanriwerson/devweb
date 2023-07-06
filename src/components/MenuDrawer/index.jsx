import React from 'react';
import PropTypes from 'prop-types';
import ToggleButton from '../ToggleButton';
import './style.css';

function MenuDrawer({ children, drawerOpen, toggleDrawer }) {
  return (
    <React.Fragment>
      <ToggleButton
        menuOpen={ drawerOpen }
        clickHandler={ toggleDrawer }
      />

      <div className={`drawer ${drawerOpen ? 'open' : ''}`}>
        {children}
      </div>
    </React.Fragment>
  );
}

MenuDrawer.propTypes = {
  children: PropTypes.node,
  drawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
}

export default MenuDrawer;
