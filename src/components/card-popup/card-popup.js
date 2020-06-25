import React from 'react';
import Description from '../description';
import CommentsBlock from '../comments-block';
import Button from '../button';
import './card-popup.css';

export default class CardPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: JSON.parse(localStorage.getItem(`cards`)).filter(item => item.id === this.props.cardId)[0].description
    }

    this.isKeyPressed = false

    this.textRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keyDownHandler);
    window.addEventListener('keyup', this.keyUpHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDownHandler);
    window.removeEventListener('keyup', this.keyUpHandler);
  }

  changeDesc = (e) => {
    e.preventDefault();
    const newDescription = JSON.parse(localStorage.getItem(`cards`)).filter(item => item.id === this.props.cardId);
    this.setState(() => ({
       description: newDescription[0].description
    }))
  }

  keyDownHandler = (e) => {
    if (e.key === 'Escape' && !this.isKeyPressed) {
      this.props.onCloseBtnClick(e);
      this.isKeyPressed = true;
    }
  }

  keyUpHandler = () => {
    this.isKeyPressed = false;
  }

  render() {
    return (
      <div className="card-overlay">
        <div className="card-popup">
          <header className="card-popup__header">   
            <h3 className="card-popup__title"><i className="fa fa-list-alt"></i>{this.props.cardName}</h3>
            <div className="card-popup__author"><i className="fa fa-user"></i> {this.props.cardAuthor}</div>
            <Button type="button" className="card-popup__close-btn close" onClick={(e) => this.props.onCloseBtnClick(e)} >
              <i className="fa fa-times"></i>
            </Button>
          </header>
          <div className="modal-body">
            <Description 
              text={this.state.description} 
              cardId={this.props.cardId} 
              onChangeDesc={this.changeDesc}/>
          </div>
          <CommentsBlock cardId={this.props.cardId} onComment={this.props.onComment}/>
        </div>
      </div>
    )
  }
}