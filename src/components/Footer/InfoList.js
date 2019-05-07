import React from 'react';

const InfoList = props => (
  <ul className='footer-info-list'>
    {props.list.map((item, i) => (
      <li key={i}>
        <a href={item.ref}>{item.text}</a>
      </li>
    ))}
  </ul>
);

export default InfoList;
