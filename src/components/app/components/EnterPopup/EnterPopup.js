import React from 'react';
import PropTypes from 'prop-types';
import './enterPopup.css';

const EnterPopup = ({ isAuthorized, onEnter }) => {
  let userName = '';

  const handleCloseBtnClick = () => {
    localStorage.setItem('user', 'guest');
    onEnter();
  };

  const handleInputChange = (e) => {
    userName = e.target.value;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (userName) {
      localStorage.setItem('user', userName);
      onEnter();
    }
  };

  return (
    <div className="enter-modal">
      {isAuthorized ? null : (
        <div className="overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">TODO board</h1>
              <button className="close" onClick={handleCloseBtnClick}>
                <i className="fa fa-times"></i>
              </button>
            </div>
            <form className="modal-body" onSubmit={handleFormSubmit}>
              <input
                type="text"
                className="username-input"
                placeholder="Username"
                onChange={handleInputChange}
              />
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

EnterPopup.propTypes = {
  isAuthorized: PropTypes.bool,
  onEnter: PropTypes.func
}

export default EnterPopup;
