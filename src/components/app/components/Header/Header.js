import React from 'react';
import './header.css';
import Button from '../../../UIKit/Button';

const Header = ({ user, title, onExitBtnClick }) => {
  const onExit = () => {
    localStorage.removeItem('user');
    onExitBtnClick();
  };

  return (
    <header className="header">
      <h1 className="header__title">
        {title}
        <i className="fa fa-tasks"></i>
      </h1>
      <div className="header__user-block">
        <i className="fa fa-github-alt"></i>
        <span className="header__username">{user}</span>
        <Button type="button" className="btn btn-primary" onClick={onExit}>
          Exit
        </Button>
      </div>
    </header>
  );
};

export default Header;
