import React from 'react';
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

  descriptionField = () => {
    if (!this.state.isOnChange) {
      return (
        <form className="card-description-form" onSubmit={this.changeDesc}>
          <textarea rows="2" placeholder="Card description" className="card-description-textarea" ref={this.descriptionRef}/>
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="button" className="btn" onClick={this.changeField}><i className="fa fa-times"></i></button>
        </form>
      )
    }
    return (
      <p className="card-description" onClick={this.changeField}>
        {this.props.text}
      </p>
    )
  }

  render() {
    return (
      <div className="card-description-wrap">
        <h4 className="card-description-title"><i className="fa fa-align-left"></i> Description</h4>
        {this.descriptionField()}
      </div>
    )
  }
}