import React from 'react';
import ChangeForm from '../../../UIKit/ChangeForm';
import './description.css';

export default class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnChange: this.props.text || false
    }

    this.descriptionRef = React.createRef();
  }

  changeDesc = (e) => {
    if (this.descriptionRef.current.value) {
      const cardsArr = JSON.parse(localStorage.getItem('cards'));
      cardsArr.find(item => item.id === this.props.cardId).description = this.descriptionRef.current.value;
      localStorage.setItem(`cards`, JSON.stringify(cardsArr));
    }
    this.setState((state) => ({
      isOnChange: !state.isOnChange
    }));
    this.props.onChangeDesc(e);
  }

  changeField = () => {
    this.setState((state) => ({
      isOnChange: !state.isOnChange
    }))
  }

  render() {
    const {text} = this.props;
    const {isOnChange} = this.state;
    return (
      <div className="card-description-wrap">
        <h4 className="card-description-title"><i className="fa fa-align-left"></i> Description</h4>
        {!isOnChange
          ? <ChangeForm 
              ref={this.descriptionRef}
              currentValue={text}
              onSubmit={this.changeDesc}
              onCloseBtnClick={this.changeField}/>
          : (<p className="card-description" onClick={this.changeField}>
              {text}
            </p>)
        }
      </div>
    )
  }
}