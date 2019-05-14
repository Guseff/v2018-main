import React from 'react';

import Step from './StepFunc';

import './style.css';

import img_desc from '../../assets/images/3-steps-image@2x.png';
import img_tab from '../../assets/images/3-steps-image-tab@2x.png';
import img_mob from '../../assets/images/3-steps-image-mob@2x.png';

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
            <Step
              act={STEPS.length === i}
              step={elem.step}
              title={elem.title}
              text={elem.text}
            />
          ))}
        </div>
        <div className='steps-button-wrap'>
          <button>Sign up now</button>
        </div>
      </div>
      <img alt='' src={img_desc} className='steps-img' />
    </div>
    <img alt='' src={img_tab} className='steps-img--tablet' />
    <img alt='' src={img_mob} className='steps-img--mobile' />
  </div>
);

export default Steps;
