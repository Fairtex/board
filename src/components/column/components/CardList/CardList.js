import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../../card';

import './cardList.css';

const CardList = ({
  user,
  onDeleteCard,
  cards,
  comments,
  columnId,
  changeCardName,
  changeDescription,
  addComment,
  deleteComment,
  changeComment,
}) => {
  return (
    <ul className="card-list">
      {cards
        .filter(item => item.columnId === columnId)
        .map(item => {
          const { id, value, author, description } = item;

          return (
            <Card
              key={id}
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
};

CardList.propTypes = {
  user: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      author: PropTypes.string,
      columnId: PropTypes.string,
      id: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      cardId: PropTypes.string,
      id: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  onDeleteCard: PropTypes.func,
  columnId: PropTypes.string.isRequired,
  changeCardName: PropTypes.func,
  changeDescription: PropTypes.func,
  addComment: PropTypes.func,
  deleteComment: PropTypes.func,
  changeComment: PropTypes.func,
};

export default CardList;
