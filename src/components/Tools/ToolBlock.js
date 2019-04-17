import React, { Component } from 'react';

import './style.css';

class ToolBlock extends Component { 
  render() {
    return (
      <div className='tool-block'>
        <div className='tool-block-img'>
          <img alt='' src={this.props.img} />
        </div>
        
        <div className='tool-block-title'>
          {this.props.title}
        </div>

        <div className='tool-block-text'>
          {this.props.text}
        </div>

        <button className='tool-btn'>Learn more</button>

      </div>
    );
  }
}

export default ToolBlock;