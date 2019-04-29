import React, { Component } from 'react';

import './style.css';

const TRASTED = [
  {
    title: 'KTI Group <br />Toivo Parnamaa',
    text: '“Bitsgap became my everyday tool to monitor what is happening on all crypto market in one place. Trading became so much easier now.“',
    img: require('../../assets/images/cointraffic.svg'),
    ico: require('../../assets/images/kti-small-logo.svg'),
  },
  {
    title: 'KTI Group <br />Toivo Parnamaa',
    text: '“Bitsgap became my everyday tool to monitor what is happening on all crypto market in one place. Trading became so much easier now.“',
    img: require('../../assets/images/admiral-markets.svg'),
    ico: require('../../assets/images/kti-small-logo.svg'),
  },
  {
    title: 'KTI Group <br />Toivo Parnamaa',
    text: '“Bitsgap became my everyday tool to monitor what is happening on all crypto market in one place. Trading became so much easier now.“',
    img: require('../../assets/images/ekl.svg'),
    ico: require('../../assets/images/kti-small-logo.svg'),
  },
  {
    title: 'KTI Group <br />Toivo Parnamaa',
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

  changeAct(num) {
    this.setState(state => ({
      act: this.state.act === 3 ? 0 : this.state.act + 1,
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
              “Bitsgap became my everyday tool to monitor 
              what is happening on all crypto market in one 
              place. Trading became so much easier now.“
            </div>
            <div className='trasted-info-title'>
              <div className='trasted-info-ico'>
                <img alt='' src={TRASTED[1].ico} />
              </div>
              KTI Group <br />Toivo Parnamaa
            </div>
          </div>

          <div className='trasted-list'>
            {TRASTED.map((elem, i) => (
              <div key={i} className='trasted-list-element'>
                <img alt='' src={elem.img} onClick={this.changeAct} />
              </div>
            ))}
          </div>  
        </div>        
      </div>
    );
  }
}

export default Trasted; 