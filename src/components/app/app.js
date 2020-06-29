import React from 'react';
import Board from './components/Board';
import EnterPopup from './components/EnterPopup';
import Header from './components/Header';
import {v1 as uuid} from 'uuid';

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

    this.addCardRef = React.createRef();
    this.columnNameRef = React.createRef();
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

  changeColumnName = (columnId) => {
    if (this.columnNameRef.current.value && 
      (this.columnNameRef.current.value !== this.state.columns.find(item => item.id === columnId).name)) {
      const columnsArr = JSON.parse(localStorage.getItem('columns'));
      columnsArr.find(item => item.id === columnId).name = this.columnNameRef.current.value;
      localStorage.setItem('columns', JSON.stringify(columnsArr));
      this.setState(() => ({
        columns: columnsArr
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
    const {user, isAuthorized, columns, cards} = this.state 
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
          columns={columns}
          cards={cards}
          addCard={this.addCard}
          deleteCard={this.deleteCard}
          changeColumnName={this.changeColumnName}
          addCardRef={this.addCardRef}
          columnNameRef={this.columnNameRef}/>
      </div>
    );
  }
}
