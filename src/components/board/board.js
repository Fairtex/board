import React from 'react';
import Column from '../column';
import './board.css';

export default class Board extends React.Component {
  render() {
    return (
      <main className="board row">
        <Column name="toDo" />
        <Column name="Progress" />
        <Column name="Test" />
        <Column name="Done" />
      </main>
    )
  };
}