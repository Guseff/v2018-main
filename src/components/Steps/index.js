import React from 'react';
import classNames from 'classnames';

import './style.css';

import img from '../../assets/images/3-steps-image@2x.png';

const STEPS = [
  {
    step: 1,
    title: 'Sign up',
    text:
      'Sign up for a FREE Bitsgap account and go through easy verification process. '
  },
  {
    step: 2,
    title: 'Connect exchangest',
    text:
      'Your funds will remain on your exchange and no one will have access to them.'
  },
  {
    step: 3,
    title: 'Start trading and monitoring cryptocurrency from any device',
    text:
      'All trades performed from Bitsgap are secured by standards used in online banking.'
  }
];

const Steps = () => (
  <div className='steps-wrapper'>
    <div className='steps'>
      <div className='steps-info'>
        <div className='steps-title'>Start in 3 easy steps:</div>
        <div className='steps-list'>
          {STEPS.map((elem, i) => (
            <div key={i} className='steps-element'>
              <div className='steps-element-title'>
                <div className='steps-element-title-number'>{elem.step}</div>
                <div className='steps-element-title-text'>{elem.title}</div>
              </div>
              <div
                className={classNames('steps-element-text', {
                  'steps-element-text--last': STEPS.length - 1 === i
                })}
              >
                {elem.text}
              </div>
            </div>
          ))}
        </div>
        <div className='steps-button-wrap'>
          <button>Sign up now</button>
        </div>
      </div>
      <img alt='' src={img} className='steps-img' />
    </div>
    <img alt='' src={img} className='steps-img--mobile' />
  </div>
);

export default Steps;
