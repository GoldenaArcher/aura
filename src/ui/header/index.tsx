import React from 'react';
import Toolbar from '../toolbar';
import Logo from '../../assets/svg/aura-logo-header-icon.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex space-between center-align">
      <div className="header__logo">
        <Link to="/">
          <img src={Logo} alt="AURA Logo" />
        </Link>
      </div>
      <Toolbar />
    </header>
  );
};

export default Header;
