import React from 'react';
import PropTypes from 'prop-types';

import CardPopup from '../../../CardPopup';

import './card.css';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
    };
  }

  openPopup = () => {
    this.setState(() => ({
      isOpened: true,
    }));
  };

  closePopup = e => {
    e.stopPropagation();
    this.setState(() => ({
      isOpened: false,
    }));
  };

  render() {
    const {
      user,
      cardContent,
      className,
      cardAuthor,
      commentsNumber,
      cardId,
      cardDescription,
      onDeleteBtnClick,
      changeCardName,
      changeDescription,
      comments,
      addComment,
      deleteComment,
      changeComment,
    } = this.props;
    const { isOpened } = this.state;

    return (
      <li>
        <div className={className}>
          <div className="card" onClick={this.openPopup}>
            {cardContent}
            {commentsNumber ? (
              <span className="card__comment-num">
                <i className="fa fa-comment"></i>
                {commentsNumber}
              </span>
            ) : null}
          </div>
          {isOpened && (
            <CardPopup
              user={user}
              cardName={cardContent}
              cardAuthor={cardAuthor}
              cardId={cardId}
              cardDescription={cardDescription}
              onCloseBtnClick={this.closePopup}
              onChangeName={changeCardName}
              onDeleteBtnClick={onDeleteBtnClick}
              changeDescription={changeDescription}
              comments={comments}
              addComment={addComment}
              deleteComment={deleteComment}
              changeComment={changeComment}
            />
          )}
        </div>
      </li>
    );
  }
}

Card.propTypes = {
  user: PropTypes.string.isRequired,
  className: PropTypes.string,
  cardContent: PropTypes.string.isRequired,
  cardAuthor: PropTypes.string.isRequired,
  cardId: PropTypes.string.isRequired,
  cardDescription: PropTypes.string,
  onDeleteBtnClick: PropTypes.func,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      cardId: PropTypes.string,
      id: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  commentsNumber: PropTypes.number,
  changeCardName: PropTypes.func,
  changeDescription: PropTypes.func,
  addComment: PropTypes.func,
  deleteComment: PropTypes.func,
  changeComment: PropTypes.func,
};
