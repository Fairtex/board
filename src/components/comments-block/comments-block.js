import React from 'react';
import {v1 as uuid} from 'uuid';
import './comments-block.css';
import CommentList from '../comment-list';

export default class CommentsBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: localStorage.getItem(`comments`) 
        ? JSON.parse(localStorage.getItem(`comments`)).filter(item => item.cardId === this.props.cardId) 
        : []
    }

    this.addCommRef = React.createRef();
    this.chageCommRef = React.createRef();
  }

  addComment = (e) => {
    e.preventDefault();
    if (this.addCommRef.current.value) {
      let newComments = localStorage.getItem(`comments`) ? JSON.parse(localStorage.getItem(`comments`)) : [];

      newComments.unshift({
        id: uuid(), 
        cardId: this.props.cardId, 
        value: this.addCommRef.current.value, 
        author: localStorage.getItem('user') || 'guest'
      })
      this.setState(() => ({
        comments: newComments.filter(item => item.cardId === this.props.cardId)
      }))
      this.addCommRef.current.value = '';
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
      comments: newComments.filter(item => item.cardId === this.props.cardId)
    }));
    localStorage.setItem(`comments`, JSON.stringify(newComments));
  }

  changeComm = (id, e) => {
    e.preventDefault();
    const newComments = JSON.parse(localStorage.getItem(`comments`));
    newComments.find(item => item.id === id).value = this.chageCommRef.current.value;
    localStorage.setItem(`comments`, JSON.stringify(newComments));
    this.setState(() => ({
      comments: newComments.filter(item => item.cardId === this.props.cardId)
    }))
  }

  render() {
    return (
      <div className="comments">
        <div className="comments__title"><i className="fa fa-list"></i> Comments</div>
        <form className="comments__form" onSubmit={this.addComment}>
          <textarea className="comment-textarea" rows="2" placeholder="add comment" ref={this.addCommRef}/>
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
        <CommentList 
          comments={this.state.comments} 
          changeRef={this.chageCommRef} 
          onDelete={this.deleteComment}
          onChangeClick={this.changeComm}/>
      </div>
    )
  }
}

