import React from 'react';
import classNames from 'classnames';

import ButtonLearn from '../ButtonLearn';

import './style.css';
import Caroussel from './Caroussel';

const OptionBlock = (props) => (
  <div className={classNames('option', {'option--reverse': props.data.reverse})}>
    <div className="option-info">
      <div className="option-title">
        {props.data.title}
      </div>
      <div className="option-text">
        {props.data.text}
      </div>
      <div className={'caroussel'}>
        <Caroussel list={props.data.list} />
      </div>
      <div className="option-button-wrap">
        <ButtonLearn text='learn more' />
      </div>
    </div>
    <img alt='' src={props.data.img} className={classNames('option-img', 
                                                  {'option-img--reverse': props.data.reverse}
                                                )} />
  </div>
);

export default OptionBlock; 