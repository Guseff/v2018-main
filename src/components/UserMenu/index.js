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
  <div className="user-menu">
    <ul>
      {USER_ITEMS.map((item, i) => (
        <li key={i}>
          <button className={classNames('user-menu-button', {'user-menu-button--blue': item.blue})}>
            {item.text}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default UserMenu;