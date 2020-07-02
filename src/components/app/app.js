import React from 'react';
import Board from './components/Board';
import EnterPopup from './components/EnterPopup';
import Header from './components/Header';
import {v1 as uuid} from 'uuid';
import changeValue from '../../utils/utils';

const startColumns = [
  { name: "toDo", id: uuid()},
  { name: "Progress", id: uuid()},
  { name: "Test", id: uuid()},
  { name: "Done", id: uuid()}
]

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
        : []
    }
  }

  componentDidMount() {
    if (localStorage.getItem('user')) {
      this.setState(() => ({
        isAuthorized: true,
        user: localStorage.getItem('user')
      }));
    }
  }

  addCard = (columnId, value) => {
    if (value) {
      let newCards = localStorage.getItem(`cards`) ? JSON.parse(localStorage.getItem(`cards`)) : [];

      newCards.push({
        value: value, 
        author: localStorage.getItem('user'), 
        columnId: columnId, 
        id: uuid(), 
        description: ''
      });
      this.setState(() => ({
        cards: newCards
      }));
      localStorage.setItem(`cards`,JSON.stringify(newCards));
    } else {
      console.log('Enter card name!');
    }
  }

  deleteCard = (id) => {
    const item = JSON.parse(localStorage.getItem(`cards`)).findIndex(el => el.id === id);
    const newCards = [
      ...JSON.parse(localStorage.getItem(`cards`)).slice(0, item),
      ...JSON.parse(localStorage.getItem(`cards`)).slice(item + 1)
    ];

    this.setState(() => ({
      cards: newCards
    }));
    localStorage.setItem(`cards`, JSON.stringify(newCards));
  }

  addComment = (cardId, value) => {
    if (value) {
      let newComments = localStorage.getItem(`comments`) ? JSON.parse(localStorage.getItem(`comments`)) : [];

      newComments.unshift({
        id: uuid(), 
        cardId: cardId, 
        value: value, 
        author: localStorage.getItem('user') || 'guest'
      })
      this.setState(() => ({
        comments: newComments
      }))
      localStorage.setItem(`comments`, JSON.stringify(newComments));
    } else {
      console.log('Enter comment text!')
    }
  }

  deleteComment = (id) => {
    const item = JSON.parse(localStorage.getItem('comments')).findIndex(el => el.id === id);
    const newComments = [
      ...JSON.parse(localStorage.getItem('comments')).slice(0, item),
      ...JSON.parse(localStorage.getItem('comments')).slice(item + 1)
    ];

    this.setState(() => ({
      comments: newComments
    }));
    localStorage.setItem(`comments`, JSON.stringify(newComments));
  }

  changeCardName = (cardId, value) => {
    if (value && 
      (value !== this.state.cards.find(item => item.id === cardId).name)) {
        const cards = changeValue('cards', 'value', cardId, value)
        this.setState(() => ({
          cards,
        }))
    }
  }

  changeDescription = (cardId, value) => {
    if (value && 
      (value !== this.state.cards.find(item => item.id === cardId).description)) {
        const cards = changeValue('cards', 'description', cardId, value)
        this.setState(() => ({
          cards,
        }))
      }
  }

  changeColumnName = (columnId, value) => {
    if (value && 
      (value !== this.state.columns.find(item => item.id === columnId).name)) {
      const columns = changeValue('columns', 'name', columnId, value)
      this.setState(() => ({
        columns,
      }))
    }
  }

  changeComment = (commId, value) => {
    if (value && 
    (value !== this.state.comments.find(item => item.id === commId).value)) {
      const comments = changeValue('comments', 'value', commId, value)
      this.setState(() => ({
        comments,
      }))
    }
  }

  authorizedToggle = () => {
    this.setState(() => ({
      isAuthorized: !this.state.isAuthorized,
      user: localStorage.getItem('user')
    }))
  }

  render() {
    const {user, isAuthorized, columns, cards, comments} = this.state 
    if (!localStorage.getItem('columns')) {
      localStorage.setItem('columns', JSON.stringify(columns));
    }
    return (
      <div className="Kanban-board">
        <Header 
          title="Work board" 
          user={user} 
          onExitBtnClick={this.authorizedToggle} />
        <EnterPopup 
          isAuthorized={isAuthorized} 
          onEnter={this.authorizedToggle}/>
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
          changeComment={this.changeComment}/>
      </div>
    );
  }
}
