import React from 'react';
import Comment from '../Comment';
import './commentList.css';

const CommentList = ({comments, onDelete, changeRef, onChangeClick}) => {
  const CardComments = comments.map(item => {
    const {id, value, author} = item;
    return (
      <Comment 
        key={id} 
        commId={id}
        commAuthor={author} 
        changeRef={changeRef} 
        commValue={value} 
        onDeleteClick={onDelete}
        onChangeClick={onChangeClick}/>
    );
  });

  return (
    <ul className="comments__list">
      {CardComments}
    </ul>
  )
}

export default CommentList;