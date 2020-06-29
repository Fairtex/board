import React from 'react';
import Button from '../../../UIKit/Button';
import './comment.css';
import ChangeForm from '../../../UIKit/ChangeForm';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnChange: false
    }
  }

  toggleChangeCommForm = () => {
    this.setState((state) => ({
      isOnChange: !state.isOnChange
    }))
  }

  onChangeFormSubmit = (e) => {
    this.props.onChangeClick(this.props.commId, e);
    this.toggleChangeCommForm();
  }

  commentField = () => {
    const {changeRef, commValue, commAuthor, commId, onDeleteClick} = this.props;
    const {isOnChange} = this.state
    if (isOnChange) {
      return (
      <ChangeForm
        ref={changeRef}
        currentValue={commValue}
        onSubmit={this.onChangeFormSubmit}
        onCloseBtnClick={this.toggleChangeCommForm}/>
      )
    }

    const isAuthor = commAuthor === localStorage.getItem('user');
    return (
      <div>
        <div className="comments__item-author">{commAuthor}</div>
        <p className="comments__item-text">{commValue}</p>
        {isAuthor  
          ?  <div className="btn-block">
               <Button type="button" className="btn btn-primary" onClick={() => onDeleteClick(commId)}>
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