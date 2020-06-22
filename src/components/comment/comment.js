import React from 'react';
import Button from '../button';
import './comment.css';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnChange: false
    }
  }

  render() {
    return (
      <div>
        <div className="comments__item-author">{this.props.commAuthor}</div>
        <p className="comments__item-text">{this.props.commValue}</p>
        <Button type="button" className="btn btn-primary" onClick={() => this.props.onDeleteClick(this.props.commId)}>
          Delete
        </Button>
        <Button type="button" className="btn btn-primary">
          <i className="fa fa-pencil"></i>
        </Button>
      </div>
    )
  }
}