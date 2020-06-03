import React from 'react';
import './card-popup.css';

const CardPopup = ({comments, cardName, cardAuthor, description, clickHandler}) => {

  const CardComments = comments.map(item => {
    const {id, value, author} = item;
    return (
      <li key={id} className="comment-item">
        <div className="comment-author">{author}</div>
        <p className="comment-text">{value}</p>
      </li>
    );
  });

  return (
    <div className="card-popup">
      <header className="modal-header">
        <h3 className="modal-title">
          {cardName}
          <div>Author: {cardAuthor}</div>
        </h3>
        <button className="close" onClick={(e) => clickHandler(e)}>&times;</button>
      </header>
      <div className="modal-body">
        <p className="card-description">{description}</p>
      </div>
      <ul className="card-comments">
        <div className="modal-subtitle">Comments</div>
        {CardComments}
      </ul>
    </div>
  )
}

export default CardPopup;