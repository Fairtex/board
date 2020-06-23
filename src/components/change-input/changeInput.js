import React from 'react';
import './changeInput.css';

export default class ChangeInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisabled: true
    }

    this.isKeyPressed = false;
  }

  keyHandler = (e) => {
    if (e.key === 'Enter' && !this.isKeyPressed) {
      console.log('shliapa');
      this.isKeyPressed = true;
    }
  }

  toggleEvent = () => {
    this.isKeyPressed = false;
  }

  render() {
    return (
      <textarea
        rows="1" 
        className="change-input" 
        autoFocus
        maxLength="80"
        defaultValue={this.props.defaultValue} 
        onChange={this.changeHandler}
        onKeyDown={this.keyHandler}
        onKeyUp={this.toggleEvent}
        onBlur={this.changeHandler}/>
    )
  }
}