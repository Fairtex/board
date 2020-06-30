import React from 'react';
import Column from '../../../Column';
import './board.css';

const Board = ({columns, cards, addCard, deleteCard, changeColumnName, changeCardName, comments}) => {

  const boardColumns = () => {
    return columns.map(item => {
      const {name, id} = item;
      return (
        <Column 
          cards={cards}
          comments={comments}
          name={name} 
          key={id} 
          columnId={id} 
          addCard={addCard} 
          deleteCard={deleteCard}
          changeColumnName={changeColumnName}
          changeCardName={changeCardName}/>
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