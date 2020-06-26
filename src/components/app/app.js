import React from 'react';
import Board from '../board';
import EnterPopup from '../enter-popup';
import Header from '../header';

export default class App extends React.Component {
  state = {
    isAuthorized: false,
    user: localStorage.getItem('user')
  }

  componentDidMount() {
    if (localStorage.getItem('user')) {
      this.setState(() => ({
        isAuthorized: true,
        user: localStorage.getItem('user')
      }));
    }
  }

  authorizedToggle = () => {
    this.setState(() => ({
      isAuthorized: !this.state.isAuthorized,
      user: localStorage.getItem('user')
    }))
  }

  render() {
    return (
      <div className="Kanban-board">
        <Header 
          title="Work board" 
          user={this.state.user} 
          onExitBtnClick={this.authorizedToggle} />
        <EnterPopup 
          isAuthorized={this.state.isAuthorized} 
          onEnter={this.authorizedToggle}/>
        <Board />
      </div>
    );
  }
}
