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

    this.textRef = React.createRef();
  }

  changeDesc = (e) => {
    e.preventDefault();
    const newDescription = JSON.parse(localStorage.getItem(`cards`)).filter(item => item.id === this.props.cardId);
    this.setState(() => ({
       description: newDescription[0].description
    }))
  }

  render() {
    return (
      <div className="card-overlay">
        <div className="card-popup">
          <header className="modal-header">
            <h3 className="modal-title">
              <i className="fa fa-list-alt"></i> {this.props.cardName}
              <div><i className="fa fa-user"></i> {this.props.cardAuthor}</div>
            </h3>
            <Button type="button" className="close" onClick={(e) => this.props.onCloseBtnClick(e)} >
              <i className="fa fa-times"></i>
            </Button>
          </header>
          <div className="modal-body">
            <Description 
              text={this.state.description} 
              cardId={this.props.cardId} 
              onChangeDesc={this.changeDesc}/>
          </div>
          <CommentsBlock cardId={this.props.cardId}/>
        </div>
      </div>
    )
  }
}