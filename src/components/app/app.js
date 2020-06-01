import React from 'react';
import Board from '../board';
import EnterPopup from '../enter-popup';

export default class App extends React.Component {
  render() {
    return (
      <div className="Kanban-board">
        <EnterPopup />
        <Board />
      </div>
    );
  }
}
