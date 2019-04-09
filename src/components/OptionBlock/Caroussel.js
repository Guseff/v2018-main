import React, { Component } from 'react';
import classNames from 'classnames';
import ReactSwipeEvents from 'react-swipe-events';

import './style.css';

class Caroussel extends Component {
  state = {shift: 0};
  
  swipeLeftHandler = () => {
    if (this.state.shift > -2) {
      this.setState({shift: this.state.shift - 1});
    }
  }

  swipeRightHandler = () => {
    if (this.state.shift < 0) {
      this.setState({shift: this.state.shift + 1});
    }
  }

  render() {
    return (
      <ReactSwipeEvents 
        onSwipedLeft={this.swipeLeftHandler}
        onSwipedRight={this.swipeRightHandler}
      >
        <div className="option-list">
          {this.props.list.map((elem, i) => (
            <div key={i} index={i + this.state.shift} className={classNames('option-list-element',
                              {'option-list-element--active': elem.active}
                            )}>
              <div className='option-element-top'>              
                <img alt='' src={elem.ico} />
                <div>
                  <span>{elem.span}</span> {elem.text}
                </div>
              </div>
              <img alt='' src={elem.pic} className='option-element-pic' />
            </div>
          ))}
        </div>
      </ReactSwipeEvents>
    );
  }
}

export default Caroussel; 