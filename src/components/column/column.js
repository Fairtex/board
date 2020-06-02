import React from 'react';
import InputGroup from '../input-group';
import CardList from '../card-list';
import './column.css';

export default class Column extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [{value: "Example", id: 1}]
    }

    this.addCard = (e) => {
      e.preventDefault();
      let newCards = this.state.cards;
      newCards.push({value: "Another one card", id: 4});
      this.setState(state => ({
        cards: newCards
      }));
    }
  }

  render() {
    return (
      <div className="column col">
        <h3 className="column__title">{this.props.name}</h3>
        <CardList cards={this.state.cards} />
        <InputGroup groupType="input" groupClass="input-group" inputType="text" inputClass="form-control" inputPlaceholder="Add card..." btnClass="btn-light" btnContent="+" onSubmit={this.addCard}/>
      </div>
    );
  }
}
