import React from 'react';
import Card from '../card';
import './card-list.css';

const CardList = ({cards, onDelete, columnId}) => {
  const elements = cards.map(item => {
    const {id, value, author, description} = item;
    if (item.columnId !== columnId) {
      return null
    }

    return (
      <li key={id} className="card-list__item">
        <Card cardContent={value} cardAuthor={author} cardId={id} cardDescription={description}/>
        <button type="button" className="btn btn-danger small" onClick={() => onDelete(id)}>
          <i className="fa fa-trash-o"></i>
        </button>
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