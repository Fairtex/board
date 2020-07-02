import React from 'react';
import Card from '../../../card';
import './cardList.css';

const CardList = ({user, onDeleteCard, cards, comments, columnId, 
                  changeCardName, changeDescription, 
                  addComment, deleteComment, changeComment}) => {
  return (
    <ul className="card-list">
      {cards.map(item => {
        const {id, value, author, description} = item;
        if (item.columnId !== columnId) {
          return null
        }

        return (
          <Card key={id} 
            user={user}
            className="card-list__item" 
            cardContent={value} 
            cardAuthor={author} 
            cardId={id} 
            cardDescription={description} 
            onDeleteBtnClick={onDeleteCard}
            comments={comments}
            commentsNumber={comments.filter(item => item.cardId === id).length}
            changeCardName={changeCardName}
            changeDescription={changeDescription}
            addComment={addComment}
            deleteComment={deleteComment}
            changeComment={changeComment}
          />
        );
      })}
    </ul>
  );
}

export default CardList;