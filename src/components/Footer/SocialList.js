import React from 'react';

import './style.css';

const SOCIAL_ITEMS = [
  {
    ico: require('../../assets/images/telegram-foot.svg'),
    ref: '#',
  },{
    ico: require('../../assets/images/facebook-foot.svg'),
    ref: '#',
  },{
    ico: require('../../assets/images/linkedin-foot.svg'),
    ref: '#',
  },{
    ico: require('../../assets/images/twitter-foot.svg'),
    ref: '#',
  },
];

const SocialList = () => (
  <ul className="footer-social-list">
    {SOCIAL_ITEMS.map((item, i) => (
      <li key={i}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href={item.ref}><img alt='' src={item.ico} /></a>
      </li>
    ))}
  </ul>
);

export default SocialList;