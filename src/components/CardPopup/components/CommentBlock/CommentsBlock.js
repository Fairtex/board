import React from 'react';
import PropTypes from 'prop-types';

import CommentList from '../CommentList';

import './commentsBlock.css';

export default class CommentsBlock extends React.Component {
  constructor(props) {
    super(props);

    this.addCommRef = React.createRef();
    this.commentText = '';
  }

  handleInputChange = e => {
    this.commentText = e.target.value;
  };

  onSubmit = e => {
    e.preventDefault();
    const { cardId, addComment } = this.props;
    addComment(cardId, this.commentText);
    this.addCommRef.current.value = '';
  };

  render() {
    const { user, cardId, comments, deleteComment, changeComment } = this.props;
    return (
      <div className="comments">
        <div className="comments__title">
          <i className="fa fa-list"></i> Comments
        </div>
        <form className="comments__form" onSubmit={this.onSubmit}>
          <textarea
            className="comments__textarea"
            rows="2"
            placeholder="add comment"
            onChange={this.handleInputChange}
            ref={this.addCommRef}
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
        <CommentList
          user={user}
          cardId={cardId}
          comments={comments}
          onDelete={deleteComment}
          onChangeClick={changeComment}
        />
      </div>
    );
  }
}

CommentsBlock.propTypes = {
  user: PropTypes.string,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      cardId: PropTypes.string,
      id: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  cardId: PropTypes.string.isRequired,
  addComment: PropTypes.func,
  deleteComment: PropTypes.func,
  changeComment: PropTypes.func,
};
