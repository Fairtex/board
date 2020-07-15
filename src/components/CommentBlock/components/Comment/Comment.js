import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../UIKit/Button';
import ChangeForm from '../../../UIKit/ChangeForm';

import './comment.css';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOnChange: false,
    };
  }

  toggleChangeCommForm = () => {
    this.setState(state => ({
      isOnChange: !state.isOnChange,
    }));
  };

  render() {
    const {
      user,
      commValue,
      commAuthor,
      commId,
      onDeleteClick,
      onChangeClick,
    } = this.props;
    const { isOnChange } = this.state;
    const isAuthor = commAuthor === user;
    return (
      <li className="comments__item">
        {isOnChange ? (
          <ChangeForm
            currentValue={commValue}
            itemId={commId}
            onSubmit={onChangeClick}
            onCloseBtnClick={this.toggleChangeCommForm}
          />
        ) : (
          <div>
            <div className="comments__item-author">{commAuthor}</div>
            <p className="comments__item-text">{commValue}</p>
            {isAuthor && (
              <div className="btn-block">
                <Button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => onDeleteClick(commId)}
                >
                  Delete
                </Button>
                <Button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.toggleChangeCommForm}
                >
                  <i className="fa fa-pencil"></i>
                </Button>
              </div>
            )}
          </div>
        )}
      </li>
    );
  }
}

Comment.propTypes = {
  user: PropTypes.string.isRequired,
  commId: PropTypes.string.isRequired,
  commAuthor: PropTypes.string.isRequired,
  commValue: PropTypes.string,
  onDeleteClick: PropTypes.func.isRequired,
  onChangeClick: PropTypes.func.isRequired,
};
