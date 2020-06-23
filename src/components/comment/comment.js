import React from 'react';
import Button from '../button';
import './comment.css';
import ChangeForm from '../change-form';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnChange: false
    }
  }

  toggleChangeCommForm = () => {
    this.setState(() => ({
      isOnChange: !this.state.isOnChange
    }))
  }

  onChangeFormSubmit = (e) => {
    this.props.onChangeClick(this.props.commId, e);
    this.toggleChangeCommForm();
  }

  commentField = () => {
    if (this.state.isOnChange) {
      return (
      <ChangeForm
        ref={this.props.changeRef}
        currentValue={this.props.commValue}
        onSubmit={this.onChangeFormSubmit}
        onCloseBtnClick={this.toggleChangeCommForm}/>
      )
    }

    const isAuthor = this.props.commAuthor === localStorage.getItem('user');
    return (
      <div>
        <div className="comments__item-author">{this.props.commAuthor}</div>
        <p className="comments__item-text">{this.props.commValue}</p>
        {isAuthor  
          ?  <div className="btn-block">
               <Button type="button" className="btn btn-primary" onClick={() => this.props.onDeleteClick(this.props.commId)}>
                Delete
               </Button>
               <Button type="button" className="btn btn-primary" onClick={this.toggleChangeCommForm}>
                 <i className="fa fa-pencil"></i>
               </Button>
             </div>
          : ''}
      </div>
    )
  }

  render() {
    return (
    <li className="comments__item">
      {this.commentField()}
    </li>
    )
  }
}