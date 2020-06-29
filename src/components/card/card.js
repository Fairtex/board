import React from 'react';
import CardPopup from './components/CardPopup';
import './card.css';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      commentNumber: localStorage.getItem('comments') &&
        JSON.parse(localStorage.getItem('comments')).filter(item => item.cardId === this.props.cardId).length,
      cardName: this.props.cardContent
    }

    this.cardNameRef = React.createRef();
  }

  openPopup = () => {
    this.setState(() => ({
      isOpened: true
    }))
  }

  closePopup = (e) => {
    e.stopPropagation()
    this.setState(() => ({
      isOpened: false
    }))
  }

  commentCounter = () => {
    this.setState(() => ({
      commentNumber: JSON.parse(localStorage.getItem('comments')).filter(item => item.cardId === this.props.cardId).length
    }))
  }

  changeName = () => {
    if (this.cardNameRef.current.value) {
      const cardsArr = JSON.parse(localStorage.getItem('cards'));
      cardsArr.find(item => item.id === this.props.cardId).value = this.cardNameRef.current.value;
      localStorage.setItem(`cards`, JSON.stringify(cardsArr));
      this.setState(() => ({
        cardName: this.cardNameRef.current.value
      }))
    }
  }

  render() {
    const {className, cardAuthor, cardId, cardDescription, onDeleteBtnClick} = this.props;
    const {cardName, commentNumber, isOpened} = this.state
    return (
      <li>
        <div className={className}>
          <div className="card" onClick={this.openPopup}>
            {cardName}
            {commentNumber 
              ? (<span className="card__comment-num">
                  <i className="fa fa-comment"></i>{commentNumber}
                  </span>)
              : null}
          </div>
          {isOpened && (
            <CardPopup 
              cardName={cardName} 
              cardNameRef={this.cardNameRef}
              cardAuthor={cardAuthor} 
              cardId={cardId} 
              cardDescription={cardDescription} 
              onCloseBtnClick={this.closePopup}
              onChangeName={this.changeName}
              onDeleteBtnClick={onDeleteBtnClick}
              onComment={this.commentCounter}
            />)}
        </div>
      </li>
    )
  }
}