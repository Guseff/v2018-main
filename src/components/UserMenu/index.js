import React from 'react';
import classNames from 'classnames';

import './style.css';

const USER_ITEMS = [
  {
    text: 'Login',
  },{
    text: 'Sign Up',
    blue: true,
  },
];

const UserMenu = () => (
  <ul className="user-menu">
    {USER_ITEMS.map((item, i) => (
      <li key={i}>
        <button className={classNames('user-menu-button')}>
          {item.text}
        </button>
      </li>
    ))}
  </ul>
);

export default UserMenu;