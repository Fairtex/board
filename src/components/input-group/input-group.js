import React from 'react';
import './input-group.css';

const InputGroup = (props) => {
  const Element = () => {
    if (props.groupType === 'input') {
      return <input type={props.inputType} className={props.inputClass} placeholder={props.inputPlaceholder}/>
    }
    if (props.groupType === 'textarea') {
      return <textarea className={props.inputClass} rows={props.inputRows} placeholder={props.inputPlaceholder}></textarea>
    }
  }
  return (
    <form className={props.groupClass} onSubmit={props.onSubmit}>
      <Element />
      <button type="submit" className={`btn ${props.btnClass}`}>{props.btnContent}</button>
    </form>
  );
}

export default InputGroup;