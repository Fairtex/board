import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../UIKit/Button';
import ChangeInput from '../../../UIKit/ChangeInput';

import './popupHeader.css';

const PopupHeader = ({
  isAuthor,
  cardName,
  cardId,
  cardAuthor,
  onCloseBtnClick,
  onDeleteBtnClick,
  onChangeName,
}) => {
  const [isNameChanged, setNameChange] = useState(false);

  PopupHeader.propTypes = {
    isAuthor: PropTypes.bool.isRequired,
    cardName: PropTypes.string.isRequired,
    cardId: PropTypes.string.isRequired,
    cardAuthor: PropTypes.string.isRequired,
    onCloseBtnClick: PropTypes.func.isRequired,
    onDeleteBtnClick: PropTypes.func.isRequired,
    onChangeName: PropTypes.func.isRequired,
  };

  const changeNameHandler = (id, value) => {
    onChangeName(id, value);
    setNameChange(false);
  };

  return (
    <header className="card-popup__header">
      {isAuthor ? (
        isNameChanged ? (
          <ChangeInput
            defaultValue={cardName}
            onEnter={changeNameHandler}
            targetId={cardId}
          />
        ) : (
          <h3 className="card-popup__title" onClick={() => setNameChange(true)}>
            <i className="fa fa-list-alt"></i>
            {cardName}
          </h3>
        )
      ) : (
        <h3 className="card-popup__title">
          <i className="fa fa-list-alt"></i>
          {cardName}
        </h3>
      )}
      <div className="card-popup__author">
        <i className="fa fa-user"></i> {cardAuthor}
      </div>
      <Button
        type="button"
        className="card-popup__close-btn close"
        onClick={e => onCloseBtnClick(e)}
      >
        <i className="fa fa-times"></i>
      </Button>
      {isAuthor && (
        <Button
          type="button"
          className="card-popup__delete-btn btn btn-danger"
          onClick={() => onDeleteBtnClick(cardId)}
        >
          <i className="fa fa-trash"></i>
        </Button>
      )}
    </header>
  );
};

export default PopupHeader;
