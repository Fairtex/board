import React from 'react';
import InputGroup from '../input-group';
import './enter-popup.css';

export default class EnterPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegistered: true
    }

    this.register = (e) => {
      e.preventDefault();
      console.log('Hooray! You registered')
    }
  }

  render() {
    if (this.state.isRegistered) {
      return null
    }
    return (
      <div className="enter-modal">
        <div className="overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Kanban board</h1>
              <button className="close">&times;</button>
            </div>
            <InputGroup groupType="input" groupClass="modal-body" inputType="text" inputClass="username-input" inputPlaceholder="Username" btnClass="btn-primary" btnContent="Sign in" onSubmit={this.register}/>
          </div>
        </div>
      </div>
    );
  }
}