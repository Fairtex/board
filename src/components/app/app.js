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
  render() {
    const {
      columns,
      currentUser,
      authorizedEnter,
      unAuthorizedEnter,
      userExit,
    } = this.props;
    return (
      <>
        <Header title="Work board" user={currentUser} onExitBtnClick={userExit} />
        <EnterPopup
          isAuthorized={currentUser ? true : false}
          onEnter={authorizedEnter}
          onClose={unAuthorizedEnter}
        />
        <Board columns={columns} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    columns: state.columns,
    currentUser: state.currentUser,
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
