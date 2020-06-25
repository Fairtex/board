import React from 'react';
import ChangeForm from '../change-form';
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
    this.setState(() => ({
      isOnChange: !this.state.isOnChange
    }));
    this.props.onChangeDesc(e);
  }

  changeField = () => {
    this.setState(() => ({
      isOnChange: !this.state.isOnChange
    }))
  }

  // descriptionField = () => {
  //   if (!this.state.isOnChange) {
  //     return (
  //       <ChangeForm 
  //         ref={this.descriptionRef}
  //         currentValue={this.props.text}
  //         onSubmit={this.changeDesc}
  //         onCloseBtnClick={this.changeField}/>
  //     )
  //   }
  //   return (
  //     <p className="card-description" onClick={this.changeField}>
  //       {this.props.text}
  //     </p>
  //   )
  // }

  render() {
    return (
      <div className="card-description-wrap">
        <h4 className="card-description-title"><i className="fa fa-align-left"></i> Description</h4>
        {!this.state.isOnChange
          ? <ChangeForm 
              ref={this.descriptionRef}
              currentValue={this.props.text}
              onSubmit={this.changeDesc}
              onCloseBtnClick={this.changeField}/>
          : (<p className="card-description" onClick={this.changeField}>
              {this.props.text}
            </p>)
        }
      </div>
    )
  }
}