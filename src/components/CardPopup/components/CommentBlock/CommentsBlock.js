import React from 'react';
// import PropTypes from 'prop-types';
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

  handleAddCard = e => {
    e.preventDefault();
    if (this.commentText) {
      const { cardId, addComment } = this.props;
      const newComm = {
        id: uuid(),
        cardId: cardId,
        author: localStorage.getItem('user') || 'guest',
        value: this.commentText,
      };
      addComment(newComm);
      this.addCommRef.current.value = '';
    } else {
      console.log('Enter comment text!');
    }
  };

  render() {
    const { user, cardId, comments, deleteComment, changeComment } = this.props;
    return (
      <div className="comments">
        <div className="comments__title">
          <i className="fa fa-list"></i> Comments
        </div>
        <form className="comments__form" onSubmit={this.handleAddCard}>
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

// CommentsBlock.propTypes = {
//   user: PropTypes.string,
//   comments: PropTypes.arrayOf(
//     PropTypes.shape({
//       author: PropTypes.string,
//       cardId: PropTypes.string,
//       id: PropTypes.string,
//       value: PropTypes.string,
//     }),
//   ),
//   cardId: PropTypes.string.isRequired,
//   addComment: PropTypes.func,
//   deleteComment: PropTypes.func,
//   changeComment: PropTypes.func,
// };
