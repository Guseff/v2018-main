import React from 'react';
import cx from 'classnames';

const InfoBlock = data => (
  <div
    className={cx('footer-info-block', {
      'footer-info-block--narrow': data.narr,
      'footer-info-block--wide': !data.narr
    })}
  >
    <div className='footer-info-block-title'>{data.title}</div>
    <div>{data.children}</div>
  </div>
);

export default InfoBlock;
