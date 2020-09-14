import React from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment';

import './commentList.css';

const CommentList = ({ comments, deleteComment, changeComment }) => {
  return (
    <ul className="comments__list">
      {comments.map(item => {
        const { id, value, author } = item;
        return (
          <Comment
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
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      cardId: PropTypes.string,
      id: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
  deleteComment: PropTypes.func.isRequired,
  changeComment: PropTypes.func.isRequired,
};
