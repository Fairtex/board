import React from 'react';
import './changeForm.css';

const ChangeForm = React.forwardRef((props, ref) => (
  <form className="change-form" onSubmit={props.onSubmit}>
    <textarea rows="2" defaultValue={props.currentValue} placeholder="Enter text" className="change-form__textarea" ref={ref}/>
    <button type="submit" className="btn btn-primary">Save</button>
    <button type="button" className="btn" onClick={props.onCloseBtnClick}>
      <i className="fa fa-times"></i>
    </button>
  </form>
));

export default ChangeForm;