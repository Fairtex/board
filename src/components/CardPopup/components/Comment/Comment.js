import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Button from '../../../UIKit/Button';
import ChangeForm from '../../../UIKit/ChangeForm';

import './comment.css';

const Comment = ({ commId, commAuthor, commValue, onDelete, onChange }) => {
  const [isOnChange, setChange] = useState(false);
  const user = useSelector(state => state.currentUser);
  const isAuthor = commAuthor === user;

  const toggleChangeCommForm = () => {
    setChange(prev => !prev);
  };

  return (
    <li className="comments__item">
      {isOnChange ? (
        <ChangeForm
          currentValue={commValue}
          itemId={commId}
          onSubmit={onChange}
          onCloseBtnClick={toggleChangeCommForm}
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
                onClick={() => onDelete(commId)}
              >
                Delete
              </Button>
              <Button
                type="button"
                className="btn btn-primary"
                onClick={toggleChangeCommForm}
              >
                <i className="fa fa-pencil"></i>
              </Button>
            </div>
          )}
        </div>
      )}
    </li>
  );
};

Comment.propTypes = {
  commId: PropTypes.string.isRequired,
  commAuthor: PropTypes.string.isRequired,
  commValue: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Comment;
