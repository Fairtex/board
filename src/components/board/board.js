import React from 'react';
import Column from '../column';
import {v1 as uuid} from 'uuid';
import './board.css';

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: "toDo", id: uuid(), columnId: 1 },
        { name: "Progress", id: uuid(), columnId: 2 },
        { name: "Test", id: uuid(), columnId: 3 },
        { name: "Done", id: uuid(), columnId: 4 }
      ]
    }

    this.boardColumns = this.state.columns.map(item => {
      const {name, id, columnId} = item;
      return (
        <Column name={name} key={id} columnId={columnId} />
      )
    })
  }

  render() {
    return (
      <main className="board row">
        {this.boardColumns}
      </main>
    )
  };
}