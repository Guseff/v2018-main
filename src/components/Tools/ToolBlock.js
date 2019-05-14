import React, { Component } from 'react';
import cx from 'classnames';

import './style.css';

class ToolBlock extends Component {
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
    const { clsd } = this.state;

    return (
      <div
        className={cx('tool-block', {
          'tool-block--closed': clsd
        })}
      >
        <div
          className={cx('tool-block-img', {
            'tool-el--closed': clsd
          })}
        >
          <img alt='' src={this.props.img} />
        </div>

        <button
          className={cx('tool-block-title', {
            'tool-block-title--closed': clsd
          })}
          onClick={this.closeHandle}
        >
          {this.props.title}
        </button>

        <div
          className={cx('tool-block-text', {
            'tool-el--closed': clsd
          })}
        >
          {this.props.text}
        </div>

        <div
          className={cx('tool-btn-wrap', {
            'tool-el--closed': clsd
          })}
        >
          <button className='tool-btn'>Learn more</button>
        </div>
      </div>
    );
  }
}

export default ToolBlock;
