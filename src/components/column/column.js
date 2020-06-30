import React from 'react';
import CardList from './components/CardList';
import ChangeInput from '../UIKit/ChangeInput';
import './column.css';

export default class Column extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columnName: this.props.name,
      newCardName: '',
      isColumnNameChanged: false
    }

    this.newCardRef = React.createRef();
  }

  toggleChangeNameForm = () => {
    this.setState((state) => ({
      isColumnNameChanged: !state.isColumnNameChanged
    }))
  }

  changeColumnName = (id, value) => {
    this.props.changeColumnName(id, value);
    this.toggleChangeNameForm();
    if (value !== '' && value !== this.state.columnName) {
      this.setState(() => ({
        columnName: value
      }))
    }
  }

  handleInputChange = (e) => {
    let cardName = e.target.value
    this.setState(() => ({
      newCardName: cardName
    }))
  }

  handleAddCard = (e) => {
    e.preventDefault()
    const { addCard, columnId } = this.props;
    addCard(columnId, this.state.newCardName);
    this.newCardRef.current.value = '';
  }

  render() {
    const {isColumnNameChanged, columnName} = this.state;
    const {columnId, cards, comments, deleteCard, changeCardName} = this.props;
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
                targetId={columnId}
                onChange={this.toggleChangeNameForm} 
                onEnter={this.changeColumnName}/>
          }
        </div>
        <CardList 
          cards={cards} 
          comments={comments} 
          onDeleteCard={deleteCard} 
          columnId={columnId}
          changeCardName={changeCardName} />
        <form className="input-group" onSubmit={this.handleAddCard}>
          <input type="text" className="form-control" placeholder="add card" ref={this.newCardRef} onChange={this.handleInputChange}/>
          <button type="submit" className="btn btn-light">
            <i className="fa fa-plus"></i>
          </button>
        </form>
      </div>
    );
  }
}
