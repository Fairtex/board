import React from 'react';
import CardList from './components/CardList';
import './column.css';
import ChangeInput from '../UIKit/ChangeInput';

export default class Column extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columnName: this.props.name,
      newCardName: '',
      isColumnNameChanged: false
    }
  }

  toggleChangeNameForm = () => {
    this.setState((state) => ({
      isColumnNameChanged: !state.isColumnNameChanged
    }))
  }

  changeColumnName = () => {
    this.props.changeColumnName(this.props.columnId);
    this.toggleChangeNameForm();
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
  }

  render() {
    const {isColumnNameChanged, columnName} = this.state;
    const {columnId, deleteCard, columnNameRef} = this.props;
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
                ref={columnNameRef}/>
          }
        </div>
        <CardList onDelete={deleteCard} columnId={columnId} />
        <form className="input-group" onSubmit={this.handleAddCard}>
          <input type="text" className="form-control" placeholder="add card" onChange={this.handleInputChange}/>
          <button type="submit" className="btn btn-light">
            <i className="fa fa-plus"></i>
          </button>
        </form>
      </div>
    );
  }
}
