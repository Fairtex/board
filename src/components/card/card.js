import React from 'react';
import './card.css';

const Card = ({cardName, cardText}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 class="card-title">{cardName}</h3>
        <p class="card-text">{cardText}</p>
      </div>
    </div>
  );
}