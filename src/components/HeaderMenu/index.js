import React from 'react';
import classNames from 'classnames';

import './style.css';

const MENU_ITEMS = [
  {
    text: 'Why Bitsgap',
    sub: [
      {
        text: 'Blog',
      },{
        text: 'Academy',
      },{
        text: 'Help Center',
      },{
        text: 'API',
      },{
        text: 'Security',
      },{
        text: 'About Us',
      },
    ],
  },{
    text: 'Pricing',
  },{
    text: 'Learn',
    active: true,
  },{
    text: 'Support',
    sub: [
      {
        text: 'Blog',
      },{
        text: 'Academy',
      },{
        text: 'Help Center',
      },{
        text: 'API',
      },{
        text: 'Security',
      },{
        text: 'About Us',
      },
    ],
  },
];

const HeaderMenu = () => (
  <nav className="header-menu">
    <ul className="text">
      {MENU_ITEMS.map((item, i) => (
        <li key={i} className={classNames({'header-menu--active': item.active})}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>{item.text}{item.sub ? <i className='header-arrow-up' /> : null}</a>
          {item.sub &&
            <ul className='header-menu-sub'>
              {item.sub.map((subitem, j) => (
                <li key={j} className={classNames({'header-menu-sub--active': subitem.active})}>
                  <a>{subitem.text}</a>
                </li>
              ))}
            </ul>
          }
        </li>
      ))}
    </ul>
  </nav>
);

export default HeaderMenu;