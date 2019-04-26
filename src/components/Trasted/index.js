import React from 'react';
import classNames from 'classnames';


import './style.css';

const TRASTED = [
  {
    img: require('../../assets/images/cointraffic.svg'),
    ico: require('../../assets/images/kti-small-logo.svg'),
  },
  {
    img: require('../../assets/images/admiral-markets.svg'),
    ico: require('../../assets/images/kti-small-logo.svg'),
  },
  {
    img: require('../../assets/images/ekl.svg'),
    ico: require('../../assets/images/kti-small-logo.svg'),
  },
  {
    img: require('../../assets/images/kti.svg'),
    ico: require('../../assets/images/kti-small-logo.svg'),
  }
];

const Trasted = () => (
  <div className='trasted-wrapper'>
    <div className='trasted-title'>
      Trusted by thousands crypto traders and great brands
    </div>
    <div className='trasted'>
      <div className='trasted-info'>
        <div className='trasted-info-text'>
          “Bitsgap became my everyday tool to monitor 
          what is happening on all crypto market in one 
          place. Trading became so much easier now.“
        </div>
        <div className='trasted-info-title'>
          <div className='trasted-info-ico'>
            <img alt='' src={TRASTED[1].ico} />
          </div>
          KTI Group <br />Toivo Parnamaa
        </div>
      </div>
      <div className='trasted-list'>
        <div className='trasted-list-element'>
          <img alt='' src={TRASTED[1].img} />
        </div>
      </div>  
    </div>        
  </div>
);

export default Trasted; 