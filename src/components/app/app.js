import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  authorizedEnter,
  unAuthorizedEnter,
  userExit,
} from '../../store/actions/authorityActions';
import Board from './components/Board';
import EnterPopup from './components/EnterPopup';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthorized: false,
      user: localStorage.getItem('user'),
      cards: localStorage.getItem(`cards`)
        ? JSON.parse(localStorage.getItem(`cards`))
        : [],
      comments: localStorage.getItem(`comments`)
        ? JSON.parse(localStorage.getItem(`comments`))
        : [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem('user')) {
      this.setState(() => ({
        isAuthorized: true,
        user: localStorage.getItem('user'),
      }));
    }
  }

  logoutUser = () => {
    localStorage.removeItem('user');
    this.setState(state => ({
      isAuthorized: !state.isAuthorized,
      user: localStorage.getItem('user'),
    }));
  };

  unauthorizedEnter = () => {
    localStorage.setItem('user', 'guest');
    this.setState(state => ({
      isAuthorized: !state.isAuthorized,
      user: localStorage.getItem('user'),
    }));
  };

  authorizedEnter = name => {
    localStorage.setItem('user', name);
    this.setState(state => ({
      isAuthorized: !state.isAuthorized,
      user: name,
    }));
  };

  render() {
    const { user, cards, comments } = this.state;
    const { columns, auth, authorizedEnter, unAuthorizedEnter, userExit } = this.props;
    return (
      <div className="work-board">
        <Header title="Work board" user={auth} onExitBtnClick={userExit} />
        <EnterPopup
          isAuthorized={auth ? true : false}
          onEnter={authorizedEnter}
          onClose={unAuthorizedEnter}
        />
        <Board user={user} columns={columns} cards={cards} comments={comments} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    columns: state.columns,
    auth: state.authorization,
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      authorizedEnter,
      unAuthorizedEnter,
      userExit,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
