import React from 'react';
import './changeInput.css';

const ChangeInput = ({ defaultValue, onEnter, targetId }) => {
  let isKeyPressed = false;
  let newValue = defaultValue;

  const handlerInputChange = (e) => {
    newValue = e.target.value;
  };

  const keyDownHandler = (e) => {
    if (e.key === 'Enter' && !isKeyPressed) {
      isKeyPressed = true;
      onEnter(targetId, newValue);
    }
  };

  const keyUpHandler = () => {
    isKeyPressed = false;
  };

  return (
    <textarea
      rows="1"
      className="change-input"
      autoFocus={true}
      maxLength="80"
      onChange={handlerInputChange}
      defaultValue={defaultValue}
      onKeyDown={keyDownHandler}
      onKeyUp={keyUpHandler}
      onBlur={() => onEnter(targetId, newValue)}
    />
  );
};

export default ChangeInput;
