import React from 'react';

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
  <nav role="navigation" className='mob-nav'>
    <div className='menu-toggle'>
      <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
      <ul className='menu-mobile'>
      {MENU_ITEMS.map((data, i) => (
        <li key={i}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">{data.text}</a>
        </li>
      ))}
      </ul>
    </div>
  </nav>
);

export default HeaderMenu;