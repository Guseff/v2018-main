import React, { Component } from 'react';
import classNames from 'classnames';

import './style.css';

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

    this.changeIndex = this.changeIndex.bind(this);
  }

  changeIndex(i) {
    this.setState(({
      act: i,
    }))
  }

  render() {
    return (
      <div className='media-wrapper'>
        <div className='media-title'>
          Our Media
        </div>
        
        <div className='media-list'>
          {MEDIA.map((elem, i) => (
            <div key={i} index={i} className='media-elem'>
              <img alt='' src={elem.img} />
              <div className='media-elem-title'>
                {elem.title}
              </div>
              <div className='media-elem-text'>
                {elem.text}
              </div>
            </div>
          ))}
        </div>   

      </div>
    );
  }
}

export default Media; 