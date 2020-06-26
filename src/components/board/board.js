import React from 'react';
import Column from '../column';
import {v1 as uuid} from 'uuid';
import './board.css';

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: localStorage.getItem('columns')
        ? JSON.parse(localStorage.getItem('columns'))
        : [
          { name: "toDo", id: uuid()},
          { name: "Progress", id: uuid()},
          { name: "Test", id: uuid()},
          { name: "Done", id: uuid()}
        ]
    };
  }

  boardColumns = () => {
    return this.state.columns.map(item => {
      const {name, id} = item;
      return (
        <Column name={name} key={id} columnId={id}/>
      )
    });
  }

  render() {
    if (!localStorage.getItem('columns')) {
      localStorage.setItem('columns', JSON.stringify(this.state.columns));
    }
    return (
      <main className="board row">
        {this.boardColumns()}
      </main>
    )
  };
}