import React from 'react';

import Toggle from '../HeaderMenu/Toggle';
import HeaderMenu from '../HeaderMenu';
import UserMenu from '../UserMenu';

import './style.css';

import logo from '../../assets/images/bitsgap-logo.svg';

const Header = () => (
  <div className='header-wrapper'>
    <div className='header'>
      <img alt='' src={logo} />
      <div className='header-menu-wrap'>
        <Toggle>
          <HeaderMenu />
          <UserMenu />
        </Toggle>
      </div>
    </div>
  </div>
);

export default Header;
