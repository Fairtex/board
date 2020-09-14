import React from 'react';
import PropTypes from 'prop-types';

import Column from '../../../column';

import './board.css';

const Board = ({ columns }) => {
  return (
    <main className="board row">
      {columns.map(item => {
        const { name, id } = item;
        return <Column name={name} key={id} columnId={id} />;
      })}
    </main>
  );
};

Board.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default Board;
