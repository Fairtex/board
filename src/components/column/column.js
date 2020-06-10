import React from 'react';
import CardList from '../card-list';
import {v1 as uuid} from 'uuid';
import './column.css';

export default class Column extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: localStorage.getItem(`cards`) 
        ? JSON.parse(localStorage.getItem(`cards`)).filter(item => item.columnId === props.columnId) 
        : []
    }

    this.inputRef = React.createRef();
  }

  addCard(e) {
    e.preventDefault();
    if (this.inputRef.current.value) {
      let newCards = localStorage.getItem(`cards`) ? JSON.parse(localStorage.getItem(`cards`)) : [];
      newCards.push({value: this.inputRef.current.value, author: localStorage.getItem('user') || 'guest', columnId: this.props.columnId, id: uuid(), description: ''});
      this.setState(state => ({
        cards: newCards.filter(item => item.columnId === this.props.columnId) 
      }));
      localStorage.setItem(`cards`,JSON.stringify(newCards));
      this.inputRef.current.value = '';
    } else {
      console.log('Enter card name!');
    }
  }

  deleteCard(id) {
    const item = JSON.parse(localStorage.getItem(`cards`)).findIndex(el => el.id === id);
    const newCards = [
      ...JSON.parse(localStorage.getItem(`cards`)).slice(0, item),
      ...JSON.parse(localStorage.getItem(`cards`)).slice(item + 1)
    ];
    this.setState(state => ({
      cards: newCards.filter(item => item.columnId === this.props.columnId)
    }));
    localStorage.setItem(`cards`, JSON.stringify(newCards));
  }

  render() {
    return (
      <div className="column col">
        <h3 className="column__title">{this.props.name}</h3>
        <CardList cards={this.state.cards} onDelete={(id) => this.deleteCard(id)} columnId={this.props.columnId}/>
        <form className="input-group" onSubmit={(e) => this.addCard(e)}>
          <input type="text" className="form-control" placeholder="add card" ref={this.inputRef} />
          <button type="submit" className="btn btn-light">
            <i className="fa fa-plus"></i>
          </button>
        </form>
      </div>
    );
  }
}
