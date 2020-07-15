import React from 'react';
import PropTypes from 'prop-types';

import './enterPopup.css';

const EnterPopup = ({ isAuthorized, onEnter, onClose }) => {
  let userName = '';

  const handleInputChange = e => {
    userName = e.target.value;
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (userName) {
      onEnter(userName);
    }
  };

  return (
    <div className="enter-modal">
      {isAuthorized ? null : (
        <div className="overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">TODO board</h1>
              <button className="close" onClick={onClose}>
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
  onEnter: PropTypes.func,
};

export default EnterPopup;
