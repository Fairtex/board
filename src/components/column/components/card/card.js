import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import getCommentsNumber from '../../../../store/selectors/getCommentsNumber';
import CardPopup from '../../../CardPopup';

import './card.css';

const Card = ({ cardContent, cardAuthor, cardId, cardDescription }) => {
  const [isOpened, setOpened] = useState(false);
  const commentsNumber = useSelector(state => getCommentsNumber(state, cardId));

  const openPopup = () => {
    setOpened(true);
  };

  const closePopup = e => {
    e.stopPropagation();
    setOpened(false);
  };

  return (
    <li>
      <div className="card-list__item">
        <div className="card" onClick={openPopup}>
          {cardContent}
          {commentsNumber ? (
            <span className="card__comment-num">
              <i className="fa fa-comment"></i>
              {commentsNumber}
            </span>
          ) : null}
        </div>
        {isOpened && (
          <CardPopup
            cardName={cardContent}
            cardAuthor={cardAuthor}
            cardId={cardId}
            cardDescription={cardDescription}
            onCloseBtnClick={closePopup}
          />
        )}
      </div>
    </li>
  );
};

Card.propTypes = {
  cardContent: PropTypes.string.isRequired,
  cardAuthor: PropTypes.string.isRequired,
  cardId: PropTypes.string.isRequired,
  cardDescription: PropTypes.string,
};

export default Card;
