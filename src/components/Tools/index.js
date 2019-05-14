import React, { Component } from 'react';
import ToolBlock from './ToolBlock';

import './style.css';

const TOOLS = [
  {
    img: require('../../assets/images/bitsgap-tool-1.svg'),
    title: 'Trade',
    text: 'Quickly monitor all crypto market and make best trading decisions.'
  },
  {
    img: require('../../assets/images/bitsgap-tool-2.svg'),
    title: 'Analyze',
    text:
      'Keep an eye on your assets and the price change in real time. It is a long established fact that a reader.'
  },
  {
    img: require('../../assets/images/bitsgap-tool-3.svg'),
    title: 'Arbitrage',
    text: 'Gain profit by exploiting the price difference between exchanges.'
  },
  {
    img: require('../../assets/images/bitsgap-tool-4.svg'),
    title: 'Demo',
    text:
      'In addition to Live trading, Bitsgap allows you to practice in DEMO mode. '
  }
];

class Tools extends Component {
  render() {
    return (
      <div className='tools-wrapper'>
        <div className='tools-title'>
          Bitsgap brings all trading tools together
        </div>
        <div className='tools'>
          {TOOLS.map((item, i) => (
            <ToolBlock
              key={i}
              img={item.img}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Tools;
