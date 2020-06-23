import React from 'react';
import './enter-popup.css';

export default class EnterPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegistered: false,
      isModalOpen: true,
      user: ''
    }
  }

  componentDidMount = () => {
    if (localStorage.getItem('user')) {
      this.setState(() => ({
        isRegistered: true,
        user: localStorage.getItem('user'),
        isModalOpen: false
      }));
    }
  }

  handleInputChange = (e) => {
    let userName = e.target.value
    this.setState(() => ({
      user: userName
    }))
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    if (this.state.user !== '') {
      localStorage.setItem('user', this.state.user);
      this.setState(() => ({
        isRegistered: !this.state.isRegistered,
        isModalOpen: false
      }))
    }
  }

  handleCloseBtnClick = () => {
    this.setState(() => ({
      isModalOpen: false
    }))
  }

  render() {
    if (!this.state.isModalOpen) {
      return null
    }
    return (
      <div className="enter-modal">
        <div className="overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Kanban board</h1>
              <button className="close" onClick={this.handleCloseBtnClick}>
                <i className="fa fa-times"></i>
              </button>
            </div>
            <form className="modal-body" onSubmit={this.handleFormSubmit}>
              <input type="text" className="username-input" placeholder="Username" defaultValue={this.state.user} onChange={this.handleInputChange} />
              <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}