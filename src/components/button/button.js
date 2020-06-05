import React from 'react';

const Button = (props) => {
  const {content, onClick, ...btnProps} = props
  return (
    <button {...btnProps} onClick={(e) => onClick(e)}>{content}</button>
  )
}

export default Button