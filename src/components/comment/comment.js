import React from 'react';
import Button from '../button';
import './comment.css';

const Comments = ({comments, onDelete}) => {

  const CardComments = comments.map(item => {
    const {id, value, author} = item;
    return (
      <li key={id} className="comment-item">
        <div className="comment-author">{author}</div>
        <p className="comment-text">{value}</p>
        <Button type="button" className="btn btn-primary" content="Delete" onClick={() => onDelete(id)}/>
      </li>
    );
  });

  return (
    <ul className="card-comments">
      <div className="modal-subtitle"><i className="fa fa-list"></i> Comments</div>
        {CardComments}
    </ul>
  )
}

export default Comments;