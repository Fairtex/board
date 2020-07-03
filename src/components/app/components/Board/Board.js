/* eslint-disable react/no-typos */
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
  const boardColumns = () => {
    return columns.map((item) => {
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
    });
  };

  return <main className="board row">{boardColumns()}</main>;
};

Board.propTypes = {
  user: PropTypes.string,
  columns: PropTypes.array,
  cards: PropTypes.array,
  addCard: PropTypes.func,
  deleteCard: PropTypes.func,
  changeColumnName: PropTypes.func,
  changeCardName: PropTypes.func,
  changeDescription: PropTypes.func,
  comments: PropTypes.array,
  addComment: PropTypes.func,
  deleteComment: PropTypes.func,
  changeComment: PropTypes.func
}

export default Board;
