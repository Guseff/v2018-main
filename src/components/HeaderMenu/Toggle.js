import React from 'react';

import './Toggle.css';

const Toggle = ({ children }) => (
  <div className='menu-toggle'>
    <input type='checkbox' />
    <span />
    <span />
    <span />
    {children}
  </div>
);

export default Toggle;
