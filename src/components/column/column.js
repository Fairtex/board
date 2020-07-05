import React from 'react';
import CardList from './components/CardList';
import ChangeInput from '../UIKit/ChangeInput';
import PropTypes from 'prop-types';
import './column.css';

export default class Column extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isColumnNameChanged: false,
    };

    this.newCardName = '';
    this.newCardRef = React.createRef();
  }

  toggleChangeNameForm = () => {
    this.setState((state) => ({
      isColumnNameChanged: !state.isColumnNameChanged,
    }));
  };

  changeColumnName = (id, value) => {
    this.props.changeColumnName(id, value);
    this.toggleChangeNameForm();
  };

  handleInputChange = (e) => {
    this.newCardName = e.target.value;
  };

  handleAddCard = (e) => {
    e.preventDefault();
    const { addCard, columnId } = this.props;
    addCard(columnId, this.newCardName);
    this.newCardRef.current.value = '';
  };

  render() {
    const { isColumnNameChanged } = this.state;
    const {
      user,
      columnId,
      name,
      cards,
      comments,
      deleteCard,
      changeCardName,
      changeDescription,
      addComment,
      deleteComment,
      changeComment,
    } = this.props;
    return (
      <div className="column col">
        <div className="column__title">
          {!isColumnNameChanged ? (
            <h3
              className="column__title--point"
              onClick={this.toggleChangeNameForm}
            >
              {name}
            </h3>
          ) : (
            <ChangeInput
              defaultValue={name}
              targetId={columnId}
              onChange={this.toggleChangeNameForm}
              onEnter={this.changeColumnName}
            />
          )}
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
          changeComment={changeComment}
        />
        <form className="input-group" onSubmit={this.handleAddCard}>
          <input
            type="text"
            className="form-control"
            placeholder="add card"
            ref={this.newCardRef}
            onChange={this.handleInputChange}
          />
          <button type="submit" className="btn btn-light">
            <i className="fa fa-plus"></i>
          </button>
        </form>
      </div>
    );
  }
}

Column.propTypes = {
  user: PropTypes.string,
  columnId: PropTypes.string,
  name: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    author: PropTypes.string,
    columnId: PropTypes.string,
    id: PropTypes.string,
    description: PropTypes.string
  })),
  comments: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    cardId: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string
  })),
  changeColumnName: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func,
  changeCardName: PropTypes.func,
  changeDescription: PropTypes.func,
  addComment: PropTypes.func,
  deleteComment: PropTypes.func,
  changeComment: PropTypes.func
}