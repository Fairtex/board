import React from 'react';
import CardPopup from '../card-popup';
import Button from '../button';
import './card.css';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
      isOnChange: false
    }
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

  changeName = () => {
    this.setState(() => ({
      isOnChange: !this.state.isOnChange
    }))
  }

  cardNameField = () => {
    
  }

  render() {
    return (
      <li className={this.props.className}>
        <input className="card" onClick={this.openPopup} value={this.props.cardContent} readOnly/>
        <Button 
          type="button" 
          className="btn btn-danger small" 
          onClick={() => this.props.onDeleteBtnClick(this.props.cardId)}>
          <i className="fa fa-trash-o"></i>
        </Button>
        <Button type="button" className="btn btn-primary small">
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
      </li>
    )
  }
}