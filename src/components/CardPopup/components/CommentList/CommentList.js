import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment';

import './commentList.css';

const CommentList = ({ user, comments, cardId, deleteComment, changeComment }) => {
  const currComments = comments.filter(el => el.cardId === cardId);

  return (
    <ul className="comments__list">
      {currComments.map(item => {
        const { id, value, author } = item;
        return (
          <Comment
            user={user}
            key={id}
            commId={id}
            commAuthor={author}
            commValue={value}
            onDelete={deleteComment}
            onChange={changeComment}
          />
        );
      })}
    </ul>
  );
};

export default CommentList;

CommentList.propTypes = {
  user: PropTypes.string,
  cardId: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      cardId: PropTypes.string,
      id: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  onDelete: PropTypes.func,
  onChangeClick: PropTypes.func,
};
