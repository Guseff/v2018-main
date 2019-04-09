import React from 'react';

import './style.css';

const InfoList = (props) => (
  <ul className="footer-info-list">
    {props.list.map((item, i) => (
      <li key={i}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href={item.ref}>{item.text}</a>
      </li>
    ))}
  </ul>
);

export default InfoList;