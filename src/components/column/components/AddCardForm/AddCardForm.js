import React from 'react';
import PropTypes from 'prop-types';

import './addCardForm.css';

export default class AddCardForm extends React.Component {
  constructor(props) {
    super(props);

    this.newCardName = '';
    this.newCardRef = React.createRef();
  }

  handleInputChange = e => {
    this.newCardName = e.target.value;
  };

  handleAddCard = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.newCardName);
    this.newCardRef.current.value = '';
  };

  render() {
    return (
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
    );
  }
}

AddCardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
