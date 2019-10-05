import React from 'react';

import Button from '../Button/Button.jsx';
import './Card.css';
import image from '../card.jpg';

function Card(props) {
  return (
    <div className='card'>
      <div className='card-header'>
        <div className='card-header-img'>
          <img className='card-img' src={image} alt='cardimage' />
        </div>
        <div className='card-header-content'>
          <p className='card-title'>{props.data.title}</p>
          <p className='card-price'>from&nbsp;₹{props.data.price}</p>
        </div>
      </div>
      <div className='card-content'>
        <p>{props.data.content}</p>
      </div>
      <Button text='Order' />
    </div> 
  );
}

export default Card;