import React from 'react';
import './column.css';

export default class Column extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: [
        {name: "Simple card", id: 1}
      ]
    }

    this.addCard = () => {
      console.log(this.textInput.value)
    }
  }

  render() {
    return (
      <div className="column col">
        <h3 className="column__title">{this.props.name}</h3>
        <ul className="list-group">

        </ul>
        <button className="btn btn-light">Add card</button>
      </div>
    );
  }
}
