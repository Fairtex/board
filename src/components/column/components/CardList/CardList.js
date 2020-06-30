import React from 'react';
import Card from '../../../Card';
import './cardList.css';

const CardList = ({onDeleteCard, cards, comments, columnId, changeCardName}) => {
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
            onDeleteBtnClick={onDeleteCard}
            comments={comments}
            commentsNumber={comments.filter(item => item.cardId === id).length}
            changeCardName={changeCardName}
          />
        );
      })}
    </ul>
  );
}

export default CardList;