import React from 'react';
import './description.css';

export default class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnChange: false
    }
  }

  changeDesc() {
    this.setState(state => ({
      isOnChange: !this.state.isOnChange
    }));
  }

  descriptionField() {
    if (this.state.isOnChange) {
      return (
        <form className="card-description-form" onSubmit={(e) => this.props.onChangeDesc(e)}>
          <textarea rows="2" placeholder="Card description" className="card-description-textarea" />
          <button type="submit" className="btn btn-primary">Save</button>
          <button type="reset" className="btn"><i className="fa fa-times"></i></button>
        </form>
      )
    }
    return (
      <p className="card-description" onClick={() => this.changeDesc()}>
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