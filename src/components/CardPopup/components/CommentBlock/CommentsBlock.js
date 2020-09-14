/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { v1 as uuid } from 'uuid';

import {
  addComment,
  changeComment,
  deleteComment,
} from '../../../../store/actions/commentActions';
import getCommentsByCard from '../../../../store/selectors/getCommentsByCard';
import CommentList from '../CommentList';

import './commentsBlock.css';

class CommentsBlock extends React.Component {
  constructor(props) {
    super(props);

    this.addCommRef = React.createRef();
    this.commentText = '';
  }

  handleInputChange = e => {
    this.commentText = e.target.value;
  };

  handleAddComment = e => {
    e.preventDefault();
    if (this.commentText) {
      const { user, cardId, addComment } = this.props;
      const newComm = {
        id: uuid(),
        cardId: cardId,
        author: user,
        value: this.commentText,
      };
      addComment(newComm);
      this.addCommRef.current.value = '';
      this.commentText = '';
    } else {
      console.log('Enter comment text!');
    }
  };

  render() {
    const { comments, deleteComment, changeComment } = this.props;
    return (
      <div className="comments">
        <div className="comments__title">
          <i className="fa fa-list"></i> Comments
        </div>
        <form className="comments__form" onSubmit={this.handleAddComment}>
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
          comments={comments}
          deleteComment={deleteComment}
          changeComment={changeComment}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    comments: getCommentsByCard(state, props.cardId),
    user: state.currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      addComment,
      changeComment,
      deleteComment,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsBlock);

CommentsBlock.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      cardId: PropTypes.string,
      id: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  cardId: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  changeComment: PropTypes.func.isRequired,
};
