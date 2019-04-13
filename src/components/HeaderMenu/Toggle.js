import React from 'react';

import './Toggle.css';

const Toggle = (props) => (
  <div className='menu-toggle'>
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
    {props.children}
  </div>
);

export default Toggle;