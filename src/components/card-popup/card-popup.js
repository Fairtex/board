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
      description: 'kartochka zhi est',
      comments: localStorage.getItem(`comments-${this.props.cardId}`) ? JSON.parse(localStorage.getItem(`comments-${this.props.cardId}`)) : []
    }

    this.textRef = React.createRef();
  }

  changeDesc(e) {
    e.preventDefault();
    console.log('description changed')
  }

  addComment(e) {
    e.preventDefault();
    if (this.textRef.current.value) {
      let newComments = this.state.comments;
      newComments.unshift({id: uuid(), value: this.textRef.current.value, author: localStorage.getItem('user') || 'guest'})
      this.setState(state => ({
        comments: newComments
      }))
      this.textRef.current.value = '';
      localStorage.setItem(`comments-${this.props.cardId}`, JSON.stringify(newComments));
    } else {
      console.log('Enter comment text!')
    }
  }

  deleteComment(id) {
    const item = this.state.comments.findIndex(el => el.id === id);
    const newComments = [
      ...this.state.comments.slice(0, item),
      ...this.state.comments.slice(item + 1)
    ];
    this.setState(state => ({
      comments: newComments
    }));
    localStorage.setItem(`comments-${this.props.cardId}`, JSON.stringify(newComments));
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
            <Description text={this.state.description} onChangeDesc={(e) => this.changeDesc(e)}/>
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