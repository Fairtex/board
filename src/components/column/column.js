import React from 'react';
import CardList from './components/CardList';
import {v1 as uuid} from 'uuid';
import './column.css';
import ChangeInput from '../UIKit/ChangeInput';

export default class Column extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: localStorage.getItem(`cards`) 
        ? JSON.parse(localStorage.getItem(`cards`)).filter(item => item.columnId === this.props.columnId) 
        : [],
      columnName: this.props.name,
      isColumnNameChanged: false
    }

    this.cardInputRef = React.createRef();
    this.columnNameRef = React.createRef();
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
    this.setState((state) => ({
      isColumnNameChanged: !state.isColumnNameChanged
    }))
  }

  changeColumnName = () => {
    if (this.columnNameRef.current.value && (this.columnNameRef.current.value !== this.state.columnName)) {
      const columnsArr = JSON.parse(localStorage.getItem('columns'));
      columnsArr.find(item => item.id === this.props.columnId).name = this.columnNameRef.current.value;
      localStorage.setItem('columns', JSON.stringify(columnsArr));
      this.setState(() => ({
        columnName: this.columnNameRef.current.value
      }))
    }
    this.toggleChangeNameForm();
  }

  render() {
    const {isColumnNameChanged, columnName, cards} = this.state;
    const {columnId} = this.props;
    return (
      <div className="column col">
        <div className="column__title">
          {!isColumnNameChanged
            ? (
              <h3 className="column__title--point" onClick={this.toggleChangeNameForm}>
                {columnName}
              </h3>
            )
            : <ChangeInput 
                defaultValue={columnName} 
                onChange={this.toggleChangeNameForm} 
                onEnter={this.changeColumnName}
                ref={this.columnNameRef}/>
          }
        </div>
        <CardList cards={cards} onDelete={this.deleteCard} columnId={columnId} />
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
