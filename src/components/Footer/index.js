import React from 'react';

import SocialList from './SocialList';
import InfoBlock from './InfoBlock';
import InfoList from './InfoList';

import './style.css';

import logo from '../../assets/images/bitsgap-logo-footer.svg'; 

const LOGO = <img alt='' src={logo} />;

const FOOTER_DATA = [
  {
    title: 'Bitsgap',
    list: [
      {
        text: 'Product Tour',
        ref: '#'
      },{
        text: 'Marketcap',
        ref: '#'
      },{
        text: 'Pricing',
        ref: '#'
      },{
        text: 'API',
        ref: '#'
      }
    ]
  },{
    title: 'Company',
    list: [
      {
        text: 'About us',
        ref: '#'
      },{
        text: 'Careers',
        ref: '#'
      },{
        text: 'Security',
        ref: '#'
      },{
        text: 'Brand guidelines',
        ref: '#'
      },{
        text: 'Contact us',
        ref: '#'
      }
    ]
  },{
    title: 'Learn',
    list: [
      {
        text: 'Blog',
        ref: '#'
      },{
        text: 'Academy',
        ref: '#'
      },{
        text: 'Help Center',
        ref: '#'
      }
    ]
  },{
    title: 'Support',
    list: [
      {
        text: 'Legal overview',
        ref: '#'
      },{
        text: 'Terms of Service',
        ref: '#'
      },{
        text: 'Privacy Policy',
        ref: '#'
      },{
        text: 'Cookie information',
        ref: '#'
      },{
        text: 'GDPR Commitment',
        ref: '#'
      }
    ]
  },
];

const Footer = () => (
  <div className="footer-wrapper">
    <div className="footer">
      <div className="footer-info">
        <InfoBlock title='Language'>
          <button className='footer-btn'>
            English <i className='footer-arrow-up' />
          </button>
        </InfoBlock>
        {FOOTER_DATA.map((data, i) => (
          <InfoBlock key={i} title={data.title} narr={true}>
            <InfoList list={data.list} />
          </InfoBlock>
        ))}
        <InfoBlock title={LOGO}>
          <div className='footer-address'>
            Bitsgap Holding OÜ.<br />
            Registry code 14004763.<br />
            Estonia, Tallinn Mõisa str 4, 13522 
          </div>
        </InfoBlock>
      </div>
      <div className="footer-social">
        <div className="footer-social-title">
          Keep in touch          
        </div>
        <SocialList />
      </div>
    </div>
  </div>
);

export default Footer;