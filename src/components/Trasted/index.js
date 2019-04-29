import React, { Component } from 'react';
import classNames from 'classnames';

import './style.css';

const TRASTED = [
  {
    title_1: 'Cointraffic',
    title_2: 'Toivo Parnamaa',
    text: '“Bitsgap became my everyday tool to monitor what is happening on all crypto market in one place. Trading became so much easier now.“',
    img: require('../../assets/images/cointraffic.svg'),
    ico: require('../../assets/images/kti-small-logo.svg'),
  },
  {
    title_1: 'Admiral Markets',
    title_2: 'Toivo Parnamaa',
    text: '“Bitsgap became my everyday tool to monitor what is happening on all crypto market in one place. Trading became so much easier now.“',
    img: require('../../assets/images/admiral-markets.svg'),
    ico: require('../../assets/images/kti-small-logo.svg'),
  },
  {
    title_1: 'EKL',
    title_2: 'Toivo Parnamaa',
    text: '“Bitsgap became my everyday tool to monitor what is happening on all crypto market in one place. Trading became so much easier now.“',
    img: require('../../assets/images/ekl.svg'),
    ico: require('../../assets/images/kti-small-logo.svg'),
  },
  {
    title_1: 'KTI Group',
    title_2: 'Toivo Parnamaa',
    text: '“Bitsgap became my everyday tool to monitor what is happening on all crypto market in one place. Trading became so much easier now.“',
    img: require('../../assets/images/kti.svg'),
    ico: require('../../assets/images/kti-small-logo.svg'),
  }
];

class Trasted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      act: 0,
    }

    this.changeAct = this.changeAct.bind(this);
  }

  changeAct(i) {
    this.setState(({
      act: i,
    }))
  }

  render() {
    return (
      <div className='trasted-wrapper'>
        <div className='trasted-title'>
          Trusted by thousands crypto traders and great brands
        </div>
        <div className='trasted'>

          <div className='trasted-info'>
            <div className='trasted-info-text'>
              {TRASTED[this.state.act].text}
            </div>
            <div className='trasted-info-title'>
              <div className='trasted-info-ico'>
                <img alt='' src={TRASTED[this.state.act].ico} />
              </div>
              {TRASTED[this.state.act].title_1}<br />
              {TRASTED[this.state.act].title_2}
            </div>
            <div className='trasted-info-btn-wrap'>
              {TRASTED.map((elem, i) => (
                <button key={i} onClick={() => this.changeAct(i)} className={classNames('trasted-info-btn', {'trasted-info-btn--active': this.state.act === i})}></button>
              ))}
            </div>
          </div>

          <div className='trasted-list'>
            {TRASTED.map((elem, i) => (
              <button key={i} onClick={() => this.changeAct(i)} className='trasted-list-element'>
                <img alt='' src={elem.img} />
              </button>
            ))}
          </div>  
        </div>        
      </div>
    );
  }
}

export default Trasted; 