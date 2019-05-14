import React, { Component } from 'react';
import cx from 'classnames';

import './style.css';

class Step extends Component {
  render() {
    const textClass = cx('steps-element-text', {
      'steps-element-text--last': this.props.act
    });

    return (
      <div className='steps-element'>
        <div className='steps-element-title'>
          <div className='steps-element-title-number'>{this.props.step}</div>
          <div className='steps-element-title-text'>{this.props.title}</div>
        </div>
        <div className={textClass}>{this.props.text}</div>
      </div>
    );
  }
}

export default Step;
