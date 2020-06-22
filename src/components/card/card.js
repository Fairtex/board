import React from 'react';
import CardPopup from '../card-popup';
import Button from '../button';
import ChangeForm from '../change-form';
import './card.css';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      isOnChange: false,
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

  toggleChangeNameForm = () => {
    this.setState(() => ({
      isOnChange: !this.state.isOnChange
    }))
  }

  changeName = (e) => {
    e.preventDefault();
    if (this.cardNameRef.current.value) {
      const cardsArr = JSON.parse(localStorage.getItem('cards'));
      cardsArr.find(item => item.id === this.props.cardId).value = this.cardNameRef.current.value;
      localStorage.setItem(`cards`, JSON.stringify(cardsArr));
      this.setState(() => ({
        cardName: this.cardNameRef.current.value
      }))
    }
    this.setState(() => ({
      isOnChange: !this.state.isOnChange,
    }))
  }

  cardField = () => {
    if (this.state.isOnChange) {
      return (
        <ChangeForm 
          ref={this.cardNameRef}
          currentValue={this.state.cardName}
          onSubmit={this.changeName}
          onCloseBtnClick={this.toggleChangeNameForm}/>
      )
    }

    return (
      <div className={this.props.className}>
        <div className="card" onClick={this.openPopup}>{this.state.cardName}</div>
        <Button 
          type="button" 
          className="btn btn-danger small" 
          onClick={() => this.props.onDeleteBtnClick(this.props.cardId)}>
          <i className="fa fa-trash-o"></i>
        </Button>
        <Button type="button" className="btn btn-primary small" onClick={this.toggleChangeNameForm}>
          <i className="fa fa-pencil"></i>
        </Button>
        {this.state.isOpened 
          ? <CardPopup 
              cardName={this.props.cardContent} 
              cardAuthor={this.props.cardAuthor} 
              cardId={this.props.cardId} 
              cardDescription={this.props.cardDescription} 
              onClose={this.closePopup} 
            /> 
          : null}
      </div>
    )
  }

  render() {
    return (
      <li>
        {this.cardField()}
      </li>
    )
  }
}