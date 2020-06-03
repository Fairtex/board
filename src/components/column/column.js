import React from 'react';
import CardList from '../card-list';
import './column.css';

export default class Column extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [{value: "Example", id: 0}]
    }

    this.inputRef = React.createRef();
  }

  addCard(e) {
    e.preventDefault();
    if (this.inputRef.current.value) {
      let newCards = this.state.cards;
      newCards.push({value: this.inputRef.current.value, id: this.state.cards.length});
      this.setState(state => ({
        cards: newCards
      }));
      this.inputRef.current.value = '';
    } else {
      console.log('Enter card name!');
    }
  }

  deleteCard(id) {
    const item = this.state.cards.findIndex(el => el.id === id);
    const newCards = [
      ...this.state.cards.slice(0, item),
      ...this.state.cards.slice(item + 1)
    ]
    this.setState(state => ({
      cards: newCards
    }))
  }

  render() {
    return (
      <div className="column col">
        <h3 className="column__title">{this.props.name}</h3>
        <CardList cards={this.state.cards} onDelete={(id) => this.deleteCard(id)}/>
        <form className="input-group" onSubmit={(e) => this.addCard(e)}>
          <input type="text" className="form-control" placeholder="add card" ref={this.inputRef} />
          <button type="submit" className="btn btn-light">+</button>
        </form>
      </div>
    );
  }
}
