import React from 'react';
import classNames from 'classnames';

import './style.css';

const MENU_ITEMS = [
  {
    text: 'Product tour',
  },{
    text: 'Security',
    active: true,
  },{
    text: 'Price',
  },{
    text: 'About',
    sub: true,
  },{
    text: 'Support',
  },
];

const HeaderMenu = () => (
  <nav className="header-menu">
    <ul className="text">
      {MENU_ITEMS.map((item, i) => (
        <li key={i} className={classNames({'header-menu--active': item.active})}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>{item.text}{item.sub ? <i className='header-arrow-up' /> : null}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default HeaderMenu;