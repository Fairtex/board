import React from 'react';
import Column from '../../../Column';
import './board.css';

const Board = ({user, columns, cards, addCard, deleteCard, 
              changeColumnName, changeCardName, changeDescription, 
              comments, addComment, deleteComment, changeComment}) => {

  const boardColumns = () => {
    return columns.map(item => {
      const {name, id} = item;
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
          changeComment={changeComment}/>
      )
    });
  }

    return (
      <main className="board row">
        {boardColumns()}
      </main>
    )
}

export default Board;