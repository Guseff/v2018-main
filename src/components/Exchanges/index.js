import React, { Component } from 'react';
import classNames from 'classnames';

import './style.css';

const EXCHANGES = [
  {
    img: require('../../assets/images/bibox.svg'),
    href: '#1',
  },{
    img: require('../../assets/images/binance.svg'),
    href: '#1',
  },{
    img: require('../../assets/images/bit-z.svg'),
    href: '#1',
  },{
    img: require('../../assets/images/bitfinex.svg'),
    href: '#1',
  },{
    img: require('../../assets/images/bitstamp.svg'),
    href: '#1',
  },{
    img: require('../../assets/images/bittrex.svg'),
    href: '#1',
  },{
    img: require('../../assets/images/bibox.svg'),
    href: '#1',
  },{
    img: require('../../assets/images/binance.svg'),
    href: '#1',
  },{
    img: require('../../assets/images/bit-z.svg'),
    href: '#1',
  },{
    img: require('../../assets/images/bitfinex.svg'),
    href: '#1',
  },{
    img: require('../../assets/images/bitstamp.svg'),
    href: '#1',
  },{
    img: require('../../assets/images/bittrex.svg'),
    href: '#1',
  },
];

class Exchanges extends Component {
  constructor(props) {
    super(props);
    this.state = { clsd: true };

    this.closeHandle = this.closeHandle.bind(this);
  }

  closeHandle() {
    this.setState(state => ({
        clsd: !state.clsd 
      }));
  }

  render() {
    return (
      <div className='exchanges-wrapper'>
        <div className='exchanges'>
          <div className='exchanges-title'>
            Supported exchanges
          </div>
          <div className={classNames('exchanges-block-wrapper', {'block-closed': this.state.clsd})}>
            {EXCHANGES.map((item, i) => (
              <div key={i} className='exchanges-block'>
                <a href={item.href}>
                  <img alt='' className='exchanges-img' src={item.img} />
                </a>
              </div>
            ))}
          </div>
        <button className='exchanges-btn' onClick={this.closeHandle}>{this.state.clsd? 'Show all' : 'Skip all'}</button>
        </div>
      </div>
    );
  }
}

export default Exchanges;