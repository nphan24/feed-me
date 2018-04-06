import React from 'react';
import './Card.css';

export const Card = (card) => {
  const { name, id, image, totalTime } = card;

  return (
    <div className='recipe-card'>
      <p>{name}</p>
      <img src={image}/>
      <p>Total time: {totalTime} mins</p>
    </div>
  );
};
