import React, { Component } from 'react';
import classNames from 'classnames';

import './style.css';

class ButtonFree extends Component {
  render() {
    return (
      <button className={classNames('button-free',
                          (this.props.big ? 'button-free--big' : 'button-free--small')
                        )}>
        {this.props.text}
      </button>
    )
  }
}

export default ButtonFree;