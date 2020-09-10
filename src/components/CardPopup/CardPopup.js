import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  changeDescription,
  deleteCard,
  renameCard,
} from '../../store/actions/cardAction';
import CommentsBlock from './components/CommentBlock';
import Description from './components/Description';
import PopupHeader from './components/PopupHeader';

import './cardPopup.css';

class CardPopup extends React.Component {
  constructor(props) {
    super(props);
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

  keyDownHandler = e => {
    if (e.key === 'Escape' && !this.isKeyPressed) {
      this.props.onCloseBtnClick(e);
      this.isKeyPressed = true;
    }
  };

  keyUpHandler = () => {
    this.isKeyPressed = false;
  };

  render() {
    const {
      user,
      cardName,
      cardAuthor,
      cardDescription,
      cardId,
      onCloseBtnClick,
      deleteCard,
      changeDescription,
      renameCard,
    } = this.props;
    const isAuthor = cardAuthor === user;
    return (
      <div className="card-overlay">
        <div className="card-popup">
          <PopupHeader
            isAuthor={isAuthor}
            cardName={cardName}
            cardId={cardId}
            cardAuthor={cardAuthor}
            onCloseBtnClick={onCloseBtnClick}
            onDeleteBtnClick={deleteCard}
            onChangeName={renameCard}
          />
          <div className="modal-body">
            <Description
              text={cardDescription}
              cardId={cardId}
              onChangeDesc={changeDescription}
            />
          </div>
          <CommentsBlock user={user} cardId={cardId} />
        </div>
      </div>
    );
  }
}

// CardPopup.propTypes = {
//   user: PropTypes.string,
//   cardName: PropTypes.string.isRequired,
//   cardAuthor: PropTypes.string.isRequired,
//   cardId: PropTypes.string.isRequired,
//   cardDescription: PropTypes.string,
//   onCloseBtnClick: PropTypes.func.isRequired,
//   onChangeName: PropTypes.func,
//   onDeleteBtnClick: PropTypes.func,
//   changeDescription: PropTypes.func,
//   comments: PropTypes.arrayOf(
//     PropTypes.shape({
//       author: PropTypes.string,
//       cardId: PropTypes.string,
//       id: PropTypes.string,
//       value: PropTypes.string,
//     }),
//   ),
//   addComment: PropTypes.func,
//   deleteComment: PropTypes.func,
//   changeComment: PropTypes.func,
// };

const mapStateToProps = state => {
  return {
    cards: state.cards,
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      changeDescription,
      deleteCard,
      renameCard,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardPopup);
