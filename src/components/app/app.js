import React from 'react';
import Board from './components/Board';
import EnterPopup from './components/EnterPopup';
import Header from './components/Header';
import { v1 as uuid } from 'uuid';
import changeValue from '../../utils/utils';

const startColumns = [
  { name: 'toDo', id: uuid() },
  { name: 'Progress', id: uuid() },
  { name: 'Test', id: uuid() },
  { name: 'Done', id: uuid() },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthorized: false,
      user: localStorage.getItem('user'),
      columns: localStorage.getItem('columns')
        ? JSON.parse(localStorage.getItem('columns'))
        : startColumns,
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

  addCard = (columnId, value) => {
    if (value) {
      let newCards = localStorage.getItem(`cards`)
        ? JSON.parse(localStorage.getItem(`cards`))
        : [];

      newCards.push({
        value: value,
        author: localStorage.getItem('user'),
        columnId: columnId,
        id: uuid(),
        description: '',
      });
      this.setState(() => ({
        cards: newCards,
      }));
      localStorage.setItem(`cards`, JSON.stringify(newCards));
    } else {
      console.log('Enter card name!');
    }
  };

  deleteCard = (id) => {
    const newCards = JSON.parse(localStorage.getItem('cards')).filter(
      (el) => el.id !== id,
    );
    this.setState(() => ({
      cards: newCards,
    }));
    localStorage.setItem(`cards`, JSON.stringify(newCards));
  };

  addComment = (cardId, value) => {
    if (value) {
      let newComments = localStorage.getItem(`comments`)
        ? JSON.parse(localStorage.getItem(`comments`))
        : [];

      newComments.unshift({
        id: uuid(),
        cardId: cardId,
        value: value,
        author: localStorage.getItem('user') || 'guest',
      });
      this.setState(() => ({
        comments: newComments,
      }));
      localStorage.setItem(`comments`, JSON.stringify(newComments));
    } else {
      console.log('Enter comment text!');
    }
  };

  deleteComment = (id) => {
    const newComments = JSON.parse(localStorage.getItem('comments')).filter(
      (el) => el.id !== id,
    );
    this.setState(() => ({
      comments: newComments,
    }));
    localStorage.setItem(`comments`, JSON.stringify(newComments));
  };

  changeCardName = (cardId, value) => {
    if (
      value &&
      value !== this.state.cards.find((item) => item.id === cardId).name
    ) {
      const cards = changeValue('cards', 'value', cardId, value);
      this.setState(() => ({
        cards,
      }));
    }
  };

  changeDescription = (cardId, value) => {
    if (
      value &&
      value !== this.state.cards.find((item) => item.id === cardId).description
    ) {
      const cards = changeValue('cards', 'description', cardId, value);
      this.setState(() => ({
        cards,
      }));
    }
  };

  changeColumnName = (columnId, value) => {
    if (
      value &&
      value !== this.state.columns.find((item) => item.id === columnId).name
    ) {
      const columns = changeValue('columns', 'name', columnId, value);
      this.setState(() => ({
        columns,
      }));
    }
  };

  changeComment = (commId, value) => {
    if (
      value &&
      value !== this.state.comments.find((item) => item.id === commId).value
    ) {
      const comments = changeValue('comments', 'value', commId, value);
      this.setState(() => ({
        comments,
      }));
    }
  };

  logoutUser = () => {
    localStorage.removeItem('user');
    this.setState((state) => ({
      isAuthorized: !state.isAuthorized,
      user: localStorage.getItem('user'),
    }));
  };

  unauthorizedEnter = () => {
    localStorage.setItem('user', 'guest');
    this.setState((state) => ({
      isAuthorized: !state.isAuthorized,
      user: localStorage.getItem('user'),
    }));
  };

  authorizedEnter = (name) => {
    localStorage.setItem('user', name);
    this.setState((state) => ({
      isAuthorized: !state.isAuthorized,
      user: name,
    }));
  }

  render() {
    const { user, isAuthorized, columns, cards, comments } = this.state;
    if (!localStorage.getItem('columns')) {
      localStorage.setItem('columns', JSON.stringify(columns));
    }
    return (
      <div className="work-board">
        <Header
          title="Work board"
          user={user}
          onExitBtnClick={this.logoutUser}
        />
        <EnterPopup
          isAuthorized={isAuthorized}
          onEnter={this.authorizedEnter}
          onClose={this.unauthorizedEnter}
        />
        <Board
          user={user}
          columns={columns}
          cards={cards}
          comments={comments}
          addCard={this.addCard}
          deleteCard={this.deleteCard}
          addComment={this.addComment}
          deleteComment={this.deleteComment}
          changeColumnName={this.changeColumnName}
          changeCardName={this.changeCardName}
          changeDescription={this.changeDescription}
          changeComment={this.changeComment}
        />
      </div>
    );
  }
}
