import React from 'react';
import './enter-popup.css';

export default class EnterPopup extends React.Component {
  constructor() {
    super();

    this.state = {
      registered: true
    }
  }

  render() {
    if (this.state.registered) {
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
            <form className="modal-body">
              <input type="text" placeholder="Username" className="username-input"/>
              <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}