import React from 'react';
import CardPopup from '../card-popup';
import './card.css';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false
    }
  }

  openPopup() {
    this.setState(state => ({
      isOpened: true
    }))
  }

  closePopup(e) {
    e.stopPropagation()
    this.setState(state => ({
      isOpened: false
    }))
  }

  render() {
    return (
      <div className="card" onClick={() => this.openPopup()}>
        {this.props.cardContent}
        {this.state.isOpened 
          ? <CardPopup cardName={this.props.cardContent} cardAuthor={this.props.cardAuthor} cardId={this.props.cardId} cardDescription={this.props.cardDescription} onClose={(e) => this.closePopup(e)} /> 
          : null}
        <button type="button" className="btn btn-primary card-edit-btn">
          <i className="fa fa-pencil"></i>
        </button>
      </div>
    )
  }
}