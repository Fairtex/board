import React from 'react';
import Description from '../Description';
import CommentsBlock from '../../../CommentBlock';
import Button from '../../../UIKit/Button';
import ChangeInput from '../../../UIKit/ChangeInput';
import PropTypes from 'prop-types';
import './cardPopup.css';

export default class CardPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNameChanged: false,
    };

    this.isKeyPressed = false;
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keyDownHandler);
    window.addEventListener('keyup', this.keyUpHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDownHandler);
    window.removeEventListener('keyup', this.keyUpHandler);
  }

  keyDownHandler = (e) => {
    if (e.key === 'Escape' && !this.isKeyPressed) {
      this.props.onCloseBtnClick(e);
      this.isKeyPressed = true;
    }
  };

  keyUpHandler = () => {
    this.isKeyPressed = false;
  };

  toggleChangeName = () => {
    this.setState((state) => ({
      isNameChanged: !state.isNameChanged,
    }));
  };

  changeCardName = (id, value) => {
    this.props.onChangeName(id, value);
    this.toggleChangeName();
  };

  render() {
    const {
      user,
      cardName,
      cardAuthor,
      cardDescription,
      cardId,
      comments,
      onCloseBtnClick,
      onDeleteBtnClick,
      changeDescription,
      addComment,
      deleteComment,
      changeComment,
    } = this.props;
    const { isNameChanged } = this.state;
    const isAuthor = cardAuthor === user;
    return (
      <div className="card-overlay">
        <div className="card-popup">
          <header className="card-popup__header">
            {isAuthor ? (
              !isNameChanged ? (
                <h3
                  className="card-popup__title"
                  onClick={this.toggleChangeName}
                >
                  <i className="fa fa-list-alt"></i>
                  {cardName}
                </h3>
              ) : (
                <ChangeInput
                  defaultValue={cardName}
                  onEnter={this.changeCardName}
                  targetId={cardId}
                />
              )
            ) : (
              <h3 className="card-popup__title">
                <i className="fa fa-list-alt"></i>
                {cardName}
              </h3>
            )}
            <div className="card-popup__author">
              <i className="fa fa-user"></i> {cardAuthor}
            </div>
            <Button
              type="button"
              className="card-popup__close-btn close"
              onClick={(e) => onCloseBtnClick(e)}
            >
              <i className="fa fa-times"></i>
            </Button>
            {isAuthor && (
              <Button
                type="button"
                className="card-popup__delete-btn btn btn-danger"
                onClick={() => onDeleteBtnClick(cardId)}
              >
                <i className="fa fa-trash"></i>
              </Button>
            )}
          </header>
          <div className="modal-body">
            <Description
              text={cardDescription}
              cardId={cardId}
              onChangeDesc={changeDescription}
            />
          </div>
          <CommentsBlock
            user={user}
            comments={comments}
            cardId={cardId}
            addComment={addComment}
            deleteComment={deleteComment}
            changeComment={changeComment}
          />
        </div>
      </div>
    );
  }
}

CardPopup.propTypes = {
  user: PropTypes.string,
  cardName: PropTypes.string.isRequired,
  cardAuthor: PropTypes.string.isRequired,
  cardId: PropTypes.string.isRequired,
  cardDescription: PropTypes.string,
  onCloseBtnClick: PropTypes.func.isRequired,
  onChangeName: PropTypes.func,
  onDeleteBtnClick: PropTypes.func,
  changeDescription: PropTypes.func,
  comments: PropTypes.arrayOf(PropTypes.shape({
    author: PropTypes.string,
    cardId: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.string
  })),
  addComment: PropTypes.func,
  deleteComment: PropTypes.func,
  changeComment: PropTypes.func
}