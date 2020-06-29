import React from 'react';
import Card from '../../../Card';
import './cardList.css';

const CardList = ({onDelete, columnId}) => {
  const cards = JSON.parse(localStorage.getItem('cards')).filter(el => el.columnId === columnId)
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