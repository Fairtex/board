import React from 'react';
import PropTypes from 'prop-types';
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

ChangeInput.propTypes = {
  defaultValue: PropTypes.string,
  targetId: PropTypes.string.isRequired,
  onEnter: PropTypes.func.isRequired
}

export default ChangeInput;
