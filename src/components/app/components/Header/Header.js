import React from 'react';
import './header.css';
import Button from '../../../UIKit/Button';
import PropTypes from 'prop-types';

const Header = ({ user, title, onExitBtnClick }) => {

  return (
    <header className="header">
      <h1 className="header__title">
        {title}
        <i className="fa fa-tasks"></i>
      </h1>
      <div className="header__user-block">
        <i className="fa fa-github-alt"></i>
        <span className="header__username">{user}</span>
        <Button type="button" className="btn btn-primary" onClick={onExitBtnClick}>
          Exit
        </Button>
      </div>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.string,
  title: PropTypes.string,
  onExitBtnClick: PropTypes.func
}

export default Header;
