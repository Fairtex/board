import React from 'react';
import './changeInput.css';

const ChangeInput = React.forwardRef((props,ref) => {
  let isKeyPressed = false;

  const keyDownHandler = (e) => {
    if (e.key === 'Enter' && !isKeyPressed) {
      isKeyPressed = true;
      props.onEnter();
    }
  }

  const keyUpHandler = () => {
    isKeyPressed = false;
  }

  return (
    <textarea
      ref={ref}
      rows="1" 
      className="change-input" 
      autoFocus={true}
      maxLength="80"
      defaultValue={props.defaultValue} 
      onKeyDown={keyDownHandler}
      onKeyUp={keyUpHandler}
      onBlur={props.onEnter}/>
  )
})

export default ChangeInput;