import React from 'react';
import CardPopup from '../card-popup';
import './card.css';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: 'bodraya carta zhi est',
      comments: [
        {id: 1,
        value: 'krasava',
        author: 'brogyaga'}
      ],
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
          ? <CardPopup comments={this.state.comments} cardName={this.props.cardContent} cardAuthor={localStorage.getItem('user')} description={this.state.description} clickHandler={(e) => this.closePopup(e)}/> 
          : null}
      </div>
    )
  }
}