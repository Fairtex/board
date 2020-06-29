import React from 'react';
import Board from './components/Board';
import EnterPopup from './components/EnterPopup';
import Header from './components/Header';

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
    const {user, isAuthorized} = this.state 
    return (
      <div className="Kanban-board">
        <Header 
          title="Work board" 
          user={user} 
          onExitBtnClick={this.authorizedToggle} />
        <EnterPopup 
          isAuthorized={isAuthorized} 
          onEnter={this.authorizedToggle}/>
        <Board />
      </div>
    );
  }
}
