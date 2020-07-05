import React from 'react';
import ChangeForm from '../../../UIKit/ChangeForm';
import PropTypes from 'prop-types';
import './description.css';

export default class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnChange: this.props.text || false,
    };
  }

  changeField = () => {
    this.setState((state) => ({
      isOnChange: !state.isOnChange,
    }));
  };

  render() {
    const { text, cardId, onChangeDesc } = this.props;
    const { isOnChange } = this.state;
    return (
      <div className="card-description-wrap">
        <h4 className="card-description-title">
          <i className="fa fa-align-left"></i> Description
        </h4>
        {!isOnChange ? (
          <ChangeForm
            currentValue={text}
            onSubmit={onChangeDesc}
            itemId={cardId}
            onCloseBtnClick={this.changeField}
          />
        ) : (
          <p className="card-description" onClick={this.changeField}>
            {text}
          </p>
        )}
      </div>
    );
  }
}

Description.propTypes = {
  text: PropTypes.string,
  cardId: PropTypes.string.isRequired,
  onChangeDesc: PropTypes.func.isRequired
}