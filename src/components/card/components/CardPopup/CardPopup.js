import React from 'react';
import Description from '../Description';
import CommentsBlock from '../../../CommentBlock';
import Button from '../../../UIKit/Button';
import ChangeInput from '../../../UIKit/ChangeInput';
import './cardPopup.css';


export default class CardPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: JSON.parse(localStorage.getItem(`cards`)).filter(item => item.id === this.props.cardId)[0].description,
      isNameChanged: false,
    }

    this.isKeyPressed = false
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

  toggleChangeName = () => {
    this.setState((state) => ({
      isNameChanged: !state.isNameChanged
    }))
  }

  changeCardName = (id, value) => {
    this.props.onChangeName(id, value);
    this.toggleChangeName();
  }

  render() {
    const {cardName, cardAuthor, cardId, onComment, onCloseBtnClick, onDeleteBtnClick} = this.props;
    const {isNameChanged, description} = this.state
    const isAuthor = cardAuthor === localStorage.getItem('user');
    return (
      <div className="card-overlay">
        <div className="card-popup">
          <header className="card-popup__header">  
            {isAuthor
              ?(!isNameChanged
                ? <h3 className="card-popup__title" onClick={this.toggleChangeName}><i className="fa fa-list-alt"></i>{cardName}</h3>
                : <ChangeInput 
                    defaultValue={cardName} 
                    onEnter={this.changeCardName}
                    targetId={cardId} />
              )
              :(<h3 className="card-popup__title"><i className="fa fa-list-alt"></i>{cardName}</h3>)
            }
            <div className="card-popup__author"><i className="fa fa-user"></i> {cardAuthor}</div>
            <Button type="button" className="card-popup__close-btn close" onClick={(e) => onCloseBtnClick(e)} >
              <i className="fa fa-times"></i>
            </Button>
            { isAuthor && 
              (<Button type="button" className="card-popup__delete-btn btn btn-danger" onClick={() => onDeleteBtnClick(cardId)}>
                <i className="fa fa-trash"></i>
              </Button>)
            }
          </header>
          <div className="modal-body">
            <Description 
              text={description} 
              cardId={cardId} 
              onChangeDesc={this.changeDesc}/>
          </div>
          <CommentsBlock cardId={cardId} onComment={onComment}/>
        </div>
      </div>
    )
  }
}