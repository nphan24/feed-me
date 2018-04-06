import React from 'react';
import './Card.css';

export const Card = (card) => {
  const { name, id, image, totalTime, source } = card;

  return (
    <div className='recipe-card'>
      <p>{name}</p>
      <img src={image}/>
      <p>Total cook time: {totalTime} mins</p>
      <a href={source} target='..blank'>See more</a>
    </div>
  );
};
