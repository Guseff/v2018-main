import React from 'react';
import classNames from 'classnames';

import './style.css';

import img from '../../assets/images/hero-image@2x.png';

const HERO_BTNS = [
  {
    text: 'GET STARTED'
  },
  {
    text: 'view demo'
  }
];

const Hero = () => (
  <div className='hero'>
    <div className='hero-info'>
      <div className='hero-info-title'>
        A better way <br /> to manage and trade <br /> cryptocurrency
      </div>
      <div className='hero-info-text'>
        Whenever you want to trade, monitor market, manage your assets or earn
        on the crypto price difference - Bitsgap is all-in-one platform that has
        you covered.
      </div>
      <div className='hero-info-buttons'>
        {HERO_BTNS.map((item, i) => (
          <button key={i} className={classNames('hero-btn')}>
            {item.text}
          </button>
        ))}
      </div>
      <div className='hero-info-video-link'>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        Wondering how it works? <a href='#'>Watch a video</a>
      </div>
    </div>
    <div className='hero-img-wrap'>
      <img alt='' className='hero-img' src={img} />
    </div>
  </div>
);

export default Hero;
