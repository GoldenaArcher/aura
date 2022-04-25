import React from 'react';
import Toolbar from '../toolbar';
import Logo from '../../assets/svg/aura-logo-header-icon.svg';

const Header = () => {
  return (
    <header className="flex space-between center-align">
      <div className="header__logo">
        <img src={Logo} alt="AURA Logo" />
      </div>
      <Toolbar />
    </header>
  );
};

export default Header;
