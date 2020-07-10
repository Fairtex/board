import React from 'react';
import CardList from './components/CardList';
import ColumnNameField from './components/ColumnNameField';
import AddCardForm from './components/AddCardForm';
import { connect } from 'react-redux';
import { addCard } from '../../store/actions/cardAction';
import { renameColumn } from '../../store/actions/columnAction';
import { v1 as uuid } from 'uuid';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import './column.css';
class Column extends React.Component {

  handleAddCard = (cardName) => {
    const { addCard, columnId, user } = this.props;
    const card = {
      value: cardName,
      author: user,
      columnId,
      id: uuid(),
      description: ''
    }
    addCard(card);
  };

  render() {
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
      renameColumn
    } = this.props;
    return (
      <div className="column col">
        <ColumnNameField 
          name={name}
          columnId={columnId}
          changeColumnName={renameColumn}
        />
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
        <AddCardForm onSubmit={this.handleAddCard} />
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

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      addCard,
      renameColumn,
    },
    dispatch,
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(Column);