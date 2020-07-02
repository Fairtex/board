import React from 'react';
import './changeForm.css';

const ChangeForm = ({ currentValue, itemId, onSubmit, onCloseBtnClick }) => {
  let newValue = currentValue;

  const handlerInputChange = (e) => {
    newValue = e.target.value;
  };

  const handleChangeDesc = (e) => {
    e.preventDefault();
    onSubmit(itemId, newValue);
    onCloseBtnClick();
  };

  return (
    <form className="change-form" onSubmit={handleChangeDesc}>
      <textarea
        rows="2"
        defaultValue={currentValue}
        placeholder="Enter text"
        className="change-form__textarea"
        onChange={handlerInputChange}
      />
      <button type="submit" className="btn btn-primary">
        Save
      </button>
      <button type="button" className="btn" onClick={onCloseBtnClick}>
        <i className="fa fa-times"></i>
      </button>
    </form>
  );
};

export default ChangeForm;
