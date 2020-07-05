import React from 'react';
import Column from '../../../column';
import PropTypes from 'prop-types';
import './board.css';

const Board = ({
  user,
  columns,
  cards,
  addCard,
  deleteCard,
  changeColumnName,
  changeCardName,
  changeDescription,
  comments,
  addComment,
  deleteComment,
  changeComment,
}) => {
  return <main className="board row">
    {columns.map((item) => {
      const { name, id } = item;
      return (
        <Column
          user={user}
          cards={cards}
          comments={comments}
          name={name}
          key={id}
          columnId={id}
          addCard={addCard}
          deleteCard={deleteCard}
          changeColumnName={changeColumnName}
          changeCardName={changeCardName}
          changeDescription={changeDescription}
          addComment={addComment}
          deleteComment={deleteComment}
          changeComment={changeComment}
        />
      );
    })}
  </main>;
};

Board.propTypes = {
  user: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string
  })).isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    author: PropTypes.string,
    columnId: PropTypes.string,
    id: PropTypes.string,
    description: PropTypes.string
  })),
  addCard: PropTypes.func,
  deleteCard: PropTypes.func,
  changeColumnName: PropTypes.func,
  changeCardName: PropTypes.func,
  changeDescription: PropTypes.func,
  comments: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    cardId: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string
  })),
  addComment: PropTypes.func,
  deleteComment: PropTypes.func,
  changeComment: PropTypes.func
}

export default Board;
