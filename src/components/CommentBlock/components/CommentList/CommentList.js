import React from 'react';
import Comment from '../Comment';
import './commentList.css';

const CommentList = ({user, comments, cardId, onDelete, onChangeClick}) => {

  const currComments = comments.filter(el => el.cardId === cardId);

  return (
    <ul className="comments__list">
    {currComments.map(item => {
      const {id, value, author} = item;
      return (
        <Comment 
          user={user}
          key={id} 
          commId={id}
          commAuthor={author} 
          commValue={value} 
          onDeleteClick={onDelete}
          onChangeClick={onChangeClick}/>
      );
    })}
    </ul>
  )
}

export default CommentList;