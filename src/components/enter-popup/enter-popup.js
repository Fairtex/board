import React from 'react';
import './enter-popup.css';

export default class EnterPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegistered: false,
      user: ''
    }
  }

  handleInputChange(e) {
    let userName = e.target.value
    this.setState(state => ({
      user: userName
    }))
  }

  handleFormSubmit(e) {
    e.preventDefault();
    if (this.state.user !== '') {
      localStorage.setItem('user', this.state.user);
      this.setState(state => ({
        isRegistered: !this.state.isRegistered
      }))
    }
  }

  handleCloseBtnClick() {
    console.log('popup closed')
  }

  render() {
    if (localStorage.getItem('user')) {
      return null
    }
    return (
      <div className="enter-modal">
        <div className="overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Kanban board</h1>
              <button className="close" onClick={() => this.handleCloseBtnClick()}>&times;</button>
            </div>
            <form className="modal-body" onSubmit={(e) => this.handleFormSubmit(e)}>
              <input type="text" className="username-input" placeholder="Username" value={this.state.user} onChange={(e) => this.handleInputChange(e)} />
              <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}