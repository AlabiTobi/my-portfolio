import React from 'react';
import './PageHeader.scss';

const SocialIcon = (headText, icon, text) => {
  return (
    <div className='socialWrapper'>
        <div className='iconBox'>
            <span>{icon}</span>
        </div>
        <h2>{headText}</h2>
        <li>{text}</li>
    </div>
  )
}

export default SocialIcon
