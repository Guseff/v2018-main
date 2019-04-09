import React from 'react';
import classNames from 'classnames';

import './style.css';

const InfoBlock = (data) => (
  <div className={classNames("footer-info-block", 
                    {
                      "footer-info-block--narrow": data.narr,
                      "footer-info-block--wide": !data.narr,
                    },
                  )}>
    <div className="footer-info-block-title">
      {data.title}
    </div>
    <div>
      {data.children}
    </div>
  </div>
);

export default InfoBlock;