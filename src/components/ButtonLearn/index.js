import React, { Component } from 'react';

import './style.css';

class ButtonLearn extends Component {
  render() {
    return (
      <button className='button-learn'>
        {this.props.text}
      </button>
    )
  }
}

export default ButtonLearn;