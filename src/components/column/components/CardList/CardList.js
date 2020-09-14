import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card';

import './cardList.css';

const CardList = ({ cards }) => {
  return (
    <ul className="card-list">
      {cards.map(item => {
        const { id, value, author, description } = item;

        return (
          <Card
            key={id}
            cardContent={value}
            cardAuthor={author}
            cardId={id}
            cardDescription={description}
          />
        );
      })}
    </ul>
  );
};

CardList.propTypes = {
  user: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      author: PropTypes.string,
      columnId: PropTypes.string,
      id: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
};

export default CardList;
