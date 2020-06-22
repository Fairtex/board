import React from 'react';
import Comment from '../comment';
import './comment-list.css';

const CommentList = ({comments, onDelete, changeRef}) => {
  const CardComments = comments.map(item => {
    const {id, value, author} = item;
    return (
      <li key={id} className="comments__item">
        <Comment 
          commId={id} 
          commAuthor={author} 
          changeRef={changeRef} 
          commValue={value} 
          onDeleteClick={onDelete}/>
      </li>
    );
  });

  return (
    <ul className="comments__list">
      {CardComments}
    </ul>
  )
}

export default CommentList;