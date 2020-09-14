import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ChangeForm from '../../../UIKit/ChangeForm';

import './description.css';

const Description = ({ text, cardId, onChangeDesc }) => {
  const [isOnChange, setChange] = useState(text || false);

  const changeField = () => {
    setChange(prev => !prev);
  };

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
          onCloseBtnClick={changeField}
        />
      ) : (
        <p className="card-description" onClick={changeField}>
          {text}
        </p>
      )}
    </div>
  );
};

Description.propTypes = {
  text: PropTypes.string,
  cardId: PropTypes.string.isRequired,
  onChangeDesc: PropTypes.func.isRequired,
};

export default Description;
