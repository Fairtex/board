import React from 'react';
import Column from '../../../Column';
import {v1 as uuid} from 'uuid';
import './board.css';

const startColumns = [
  { name: "toDo", id: uuid()},
  { name: "Progress", id: uuid()},
  { name: "Test", id: uuid()},
  { name: "Done", id: uuid()}
]

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: localStorage.getItem('columns')
        ? JSON.parse(localStorage.getItem('columns'))
        : startColumns
    };
  }

  boardColumns = () => {
    const {columns} = this.state
    return columns.map(item => {
      const {name, id} = item;
      return (
        <Column name={name} key={id} columnId={id}/>
      )
    });
  }

  render() {
    const {columns} = this.state
    if (!localStorage.getItem('columns')) {
      localStorage.setItem('columns', JSON.stringify(columns));
    }
    return (
      <main className="board row">
        {this.boardColumns()}
      </main>
    )
  };
}