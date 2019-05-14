import React from 'react';
import cx from 'classnames';

import './style.css';

const Step = (props) => {
  const textClass = cx('steps-element-text', {
    'steps-element-text--last': props.act
  });

  return (
    <div className='steps-element'>
      <div className='steps-element-title'>
        <div className='steps-element-title-number'>{props.step}</div>
        <div className='steps-element-title-text'>{props.title}</div>
      </div>
      <div className={textClass}>{props.text}</div>
    </div>
  );
}

export default Step;
