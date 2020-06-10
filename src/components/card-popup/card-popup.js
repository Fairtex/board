import React from 'react';
import {v1 as uuid} from 'uuid';
import Description from '../description';
import Comments from '../comment';
import Button from '../button';
import './card-popup.css';

export default class CardPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: JSON.parse(localStorage.getItem(`cards`)).filter(item => item.id === this.props.cardId)[0].description,
      comments: localStorage.getItem(`comments`) ? JSON.parse(localStorage.getItem(`comments`)).filter(item => item.cardId === this.props.cardId) : []
    }

    this.textRef = React.createRef();
  }

  changeDesc(e) {
    e.preventDefault();
    const newDescription = JSON.parse(localStorage.getItem(`cards`)).filter(item => item.id === this.props.cardId);
    this.setState(state => ({
       description: newDescription[0].description
    }))
  }

  addComment(e) {
    e.preventDefault();
    if (this.textRef.current.value) {
      let newComments = localStorage.getItem(`comments`) ? JSON.parse(localStorage.getItem(`comments`)) : [];
      newComments.unshift({id: uuid(), cardId: this.props.cardId, value: this.textRef.current.value, author: localStorage.getItem('user') || 'guest'})
      this.setState(state => ({
        comments: newComments.filter(item => item.cardId === this.props.cardId)
      }))
      this.textRef.current.value = '';
      localStorage.setItem(`comments`, JSON.stringify(newComments));
    } else {
      console.log('Enter comment text!')
    }
  }

  deleteComment(id) {
    const item = JSON.parse(localStorage.getItem('comments')).findIndex(el => el.id === id);
    const newComments = [
      ...JSON.parse(localStorage.getItem('comments')).slice(0, item),
      ...JSON.parse(localStorage.getItem('comments')).slice(item + 1)
    ];
    this.setState(state => ({
      comments: newComments.filter(item => item.cardId === this.props.cardId)
    }));
    localStorage.setItem(`comments`, JSON.stringify(newComments));
  }

  render() {
    return (
      <div className="card-overlay">
        <div className="card-popup">
          <header className="modal-header">
            <h3 className="modal-title">
              <i className="fa fa-list-alt"></i> {this.props.cardName}
              <div><i className="fa fa-user"></i> {this.props.cardAuthor}</div>
            </h3>
            <Button type="button" className="close" content={<i className="fa fa-times"></i>} onClick={(e) => this.props.onClose(e)} />
          </header>
          <div className="modal-body">
            <Description text={this.state.description} cardId={this.props.cardId} onChangeDesc={(e) => this.changeDesc(e)}/>
          </div>
          <Comments comments={this.state.comments} onDelete={(id) => this.deleteComment(id)}/>
          <form className="comment-form" onSubmit={(e) => this.addComment(e)}>
            <textarea className="comment-textarea" rows="2" placeholder="add comment" ref={this.textRef}/>
            <button type="submit" className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    )
  }
}