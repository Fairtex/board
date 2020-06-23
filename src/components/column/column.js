import React from 'react';
import CardList from '../card-list';
import {v1 as uuid} from 'uuid';
import './column.css';
import ChangeInput from '../change-input';

export default class Column extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: localStorage.getItem(`cards`) 
        ? JSON.parse(localStorage.getItem(`cards`)).filter(item => item.columnId === props.columnId) 
        : [],
      columnName: this.props.name,
      isColumnNameChanged: false
    }

    this.cardInputRef = React.createRef();
  }

  addCard = (e) => {
    e.preventDefault();
    
    if (this.cardInputRef.current.value) {
      let newCards = localStorage.getItem(`cards`) ? JSON.parse(localStorage.getItem(`cards`)) : [];

      newCards.push({
        value: this.cardInputRef.current.value, 
        author: localStorage.getItem('user') || 'guest', 
        columnId: this.props.columnId, 
        id: uuid(), 
        description: ''
      });
      this.setState(() => ({
        cards: newCards.filter(item => item.columnId === this.props.columnId) 
      }));
      localStorage.setItem(`cards`,JSON.stringify(newCards));
      this.cardInputRef.current.value = '';
    } else {
      console.log('Enter card name!');
    }
  }

  deleteCard = (id) => {
    const item = JSON.parse(localStorage.getItem(`cards`)).findIndex(el => el.id === id);
    const newCards = [
      ...JSON.parse(localStorage.getItem(`cards`)).slice(0, item),
      ...JSON.parse(localStorage.getItem(`cards`)).slice(item + 1)
    ];

    this.setState(() => ({
      cards: newCards.filter(item => item.columnId === this.props.columnId)
    }));
    localStorage.setItem(`cards`, JSON.stringify(newCards));
  }

  toggleChangeNameForm = () => {
    this.setState(() => ({
      isColumnNameChanged: !this.state.isColumnNameChanged
    }))
  }

  changeColName = (e) => {
    let colName = e.target.value
    this.setState(() => ({
      columnName: colName
    }))
  }

  ColNameField = () => {
    if (!this.state.isColumnNameChanged) {
      return (
        <h3 className="column__title--point" onClick={this.toggleChangeNameForm}>
          {this.state.columnName}
        </h3>
      )
    }
    return (
      <ChangeInput defaultValue={this.state.columnName} onChange={this.changeColName} />
    )
  }

  render() {
    return (
      <div className="column col">
        <div className="column__title">
          {this.ColNameField()}
        </div>
        <CardList cards={this.state.cards} onDelete={this.deleteCard} columnId={this.props.columnId}/>
        <form className="input-group" onSubmit={this.addCard}>
          <input type="text" className="form-control" placeholder="add card" ref={this.cardInputRef} />
          <button type="submit" className="btn btn-light">
            <i className="fa fa-plus"></i>
          </button>
        </form>
      </div>
    );
  }
}
