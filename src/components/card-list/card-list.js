import React from 'react';
import Card from '../card';
import './card-list.css';

const CardList = ({cards, onDelete}) => {
  const elements = cards.map(item => {
    const {id, value} = item
    return (
      <li key={id} className="card-list__item">
        <Card cardContent={value} />
        <button type="button" className="btn btn-danger small" onClick={() => onDelete(id)}>-</button>
      </li>
    );
  });

  return (
    <ul className="card-list">
      {elements}
    </ul>
  );
}

export default CardList;