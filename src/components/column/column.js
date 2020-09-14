/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { v1 as uuid } from 'uuid';

import { addCard } from '../../store/actions/cardAction';
import { renameColumn } from '../../store/actions/columnAction';
import getCardsByColumn from '../../store/selectors/getCardsByColumn';
import AddCardForm from './components/AddCardForm';
import CardList from './components/CardList';
import ColumnNameField from './components/ColumnNameField';

import './column.css';

class Column extends React.Component {
  handleAddCard = cardName => {
    const { addCard, columnId, user } = this.props;
    const card = {
      value: cardName,
      author: user,
      columnId,
      id: uuid(),
      description: '',
    };
    addCard(card);
  };

  render() {
    const { cards, name, columnId, renameColumn } = this.props;
    return (
      <div className="column col">
        <ColumnNameField
          name={name}
          columnId={columnId}
          changeColumnName={renameColumn}
        />
        <CardList cards={cards} />
        <AddCardForm onSubmit={this.handleAddCard} />
      </div>
    );
  }
}

Column.propTypes = {
  user: PropTypes.string,
  columnId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      author: PropTypes.string,
      columnId: PropTypes.string,
      id: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
  renameColumn: PropTypes.func.isRequired,
  addCard: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    cards: getCardsByColumn(state, props.columnId),
    user: state.currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      addCard,
      renameColumn,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
