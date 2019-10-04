import React from 'react';

import './Button.css';

function Button(props) {
  return (
    <div className='component-btn--container'>
      <button className='component-btn'>{props.text}</button>
    </div>
  );
}

export default Button;