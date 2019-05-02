import React, { Component } from 'react';
import classNames from 'classnames';

import './style.css';

import arrowleft from '../../assets/images/left-arrow.svg';
import arrowright from '../../assets/images/right-arrow.svg';
import openwindow from '../../assets/images/open-window.svg';

const MEDIA = [
  {
    title: 'CINDX Aims to Democratize the Modern Financial System',
    text: '“Bitsgap became my everyday tool to monitor what is happening on all crypto market in one place. Trading became so much easier now.“',
    img: require('../../assets/images/altcoin.svg'),
  },
  {
    title: 'CINDX Aims to Democratize the Modern Financial System',
    text: '“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been house is simply dummy text of the printing',
    img: require('../../assets/images/newsbtc.svg'),
  },
  {
    title: 'CINDX Aims to Democratize the Modern Financial System',
    text: '“Bitsgap became my everyday tool to monitor what is happening on all crypto market in one place. Trading became so much easier now.“',
    img: require('../../assets/images/elitecurrensea.svg'),
  },
  {
    title: 'CINDX Aims to Democratize the Modern Financial System',
    text: '“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been house is simply dummy text of the printing',
    img: require('../../assets/images/newsbtc.svg'),
  },
];

class Media extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shift: 0,
    }

  }

  decIndex = () => {
    this.setState(({
      shift: 0,
    }))
  }

  incIndex = () => {
    this.setState(({
      shift: -1,
    }))
  }

  render() {
    return (
      <div className='media-wrapper'>
        <div className='media-title'>
          Our Media
        </div>
        <div className='media'>
          <button onClick={this.decIndex} className={classNames('media-arrow-button', 'media-arrow-button--left')}>
            <img alt='' src={arrowleft} />
          </button>
          <button onClick={this.incIndex} className={classNames('media-arrow-button', 'media-arrow-button--right')}>
            <img alt='' src={arrowright} />
          </button>
          <div className='media-list'>
            {MEDIA.map((elem, i) => (
              <div key={i} index={i + this.state.shift} className='media-elem'>
                <img alt='' src={elem.img} />
                <div className='media-elem-title'>
                  {elem.title}
                </div>
                <div className='media-elem-text'>
                  {elem.text}
                </div>
                <button className='media-elem-open'>
                  <img alt='' src={openwindow} />
                </button>
              </div>
            ))}
          </div>   
        </div>
        <div className='media-ind-list'>
          <button onClick={this.decIndex} className={classNames('media-ind-elem', {'media-ind-elem--active': this.state.shift === 0})}></button>
          <button onClick={this.incIndex} className={classNames('media-ind-elem', {'media-ind-elem--active': this.state.shift === -1})}></button>
        </div>  
      </div>
    );
  }
}

export default Media; 