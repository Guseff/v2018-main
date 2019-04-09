import React from 'react';

import HeaderMenu from '../HeaderMenu';
import UserMenu from '../UserMenu';
import HeaderMenuMob from '../HeaderMenuMob';

import './style.css';

import logo from '../../assets/images/bitsgap-logo.svg'; 

const Header = () => (
  <div className="header-wrapper">
    <div className="header">
      <img alt='' src={logo} />
      <HeaderMenuMob />
      <div className="header-menu-wrap">
        <HeaderMenu />
        <UserMenu />       
      </div>
    </div>
  </div>
);

export default Header;