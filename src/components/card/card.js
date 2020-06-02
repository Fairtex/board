import React from 'react';
import './card.css';

const Card = ({cardContent}) => {
  return (
    <div className="card">
      {cardContent}
    </div>
  );
}

export default Card;