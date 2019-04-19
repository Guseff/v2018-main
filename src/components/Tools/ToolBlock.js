import React, { Component } from 'react';
import classNames from 'classnames';

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
    return (
      <div className={classNames('tool-block', {'tool-block--closed': this.state.clsd})}>
        <div className={classNames('tool-block-img', {'tool-el--closed': this.state.clsd})}>
          <img alt='' src={this.props.img} />
        </div>
        
        <button className={classNames('tool-block-title', {'tool-block-title--closed': this.state.clsd})} onClick={this.closeHandle}>
          {this.props.title}
        </button>

        <div className={classNames('tool-block-text', {'tool-el--closed': this.state.clsd})}>
          {this.props.text}
        </div>

        <div className={classNames('tool-btn-wrap', {'tool-el--closed': this.state.clsd})}>
          <button className={classNames('tool-btn')}>Learn more</button>
        </div>
      </div>
    );
  }
}

export default ToolBlock;