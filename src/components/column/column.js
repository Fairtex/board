import React from 'react';
import CardList from './components/CardList';
import ChangeInput from '../UIKit/ChangeInput';
import './column.css';

export default class Column extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isColumnNameChanged: false
    }

    this.newCardName = '';
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
  }

  handleInputChange = (e) => {
    this.newCardName = e.target.value
  }

  handleAddCard = (e) => {
    e.preventDefault()
    const { addCard, columnId } = this.props;
    addCard(columnId, this.newCardName);
    this.newCardRef.current.value = '';
  }

  render() {
    const {isColumnNameChanged} = this.state;
    const {user, columnId, name, cards, comments, 
          deleteCard, changeCardName, changeDescription, 
          addComment, deleteComment, changeComment} = this.props;
    return (
      <div className="column col">
        <div className="column__title">
          {!isColumnNameChanged
            ? (
              <h3 className="column__title--point" onClick={this.toggleChangeNameForm}>
                {name}
              </h3>
            )
            : <ChangeInput 
                defaultValue={name} 
                targetId={columnId}
                onChange={this.toggleChangeNameForm} 
                onEnter={this.changeColumnName}/>
          }
        </div>
        <CardList 
          user={user}
          cards={cards} 
          comments={comments} 
          onDeleteCard={deleteCard} 
          columnId={columnId}
          changeCardName={changeCardName} 
          changeDescription={changeDescription}
          addComment={addComment}
          deleteComment={deleteComment}
          changeComment={changeComment}/>
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
