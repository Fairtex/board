import React from 'react';
import Card from '../../../Card';
import './cardList.css';

const CardList = ({cards, onDelete, columnId}) => {
  return (
    <ul className="card-list">
      {cards.map(item => {
        const {id, value, author, description} = item;
        if (item.columnId !== columnId) {
          return null
        }

        return (
          <Card key={id} 
            className="card-list__item" 
            cardContent={value} 
            cardAuthor={author} 
            cardId={id} 
            cardDescription={description} 
            onDeleteBtnClick={onDelete}
          />
        );
      })}
    </ul>
  );
}

export default CardList;