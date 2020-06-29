import React from 'react';
import Column from '../../../Column';
import './board.css';

const Board = ({columns, addCard, deleteCard, addCardRef, changeColumnName, columnNameRef}) => {

  const boardColumns = () => {
    return columns.map(item => {
      const {name, id} = item;
      return (
        <Column 
          name={name} 
          key={id} 
          columnId={id} 
          addCard={addCard} 
          deleteCard={deleteCard}
          changeColumnName={changeColumnName}
          addCardRef={addCardRef}
          columnNameRef={columnNameRef}/>
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