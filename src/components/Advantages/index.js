import React from 'react';

import './style.css';

const ADVANTAGES = [
  {
    text: 'All crypto market at a single glance',
    num: 25,
    value: 'exchanges',
  },{
    text: 'Never miss the opportunity with',
    num: 10,
    thou: true,
    value: 'pairs',
  },{
    text: 'Trusted by',
    num: 5,
    thou: true,
    value: 'traders',
  },
];

const Advantages = () => (
  <div className='advantages'>
    {ADVANTAGES.map((item, i) => (
      <div key={i} className='advantages-block'>
        <div className='advantages-block-text'>
          {item.text}
        </div>
        <div className='advantages-block-val'>
          + {item.num}{item.thou ? ',000' : ''} {item.value}
        </div>
        {(i + 1 < ADVANTAGES.length) && <div className='advantages-gap' />}
      </div>
    ))}
  </div>
);

export default Advantages;