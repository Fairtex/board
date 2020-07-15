import { v1 as uuid } from 'uuid';

import { RENAME_COLUMN } from '../actionTypes';

const initialState = [
  { name: 'toDo', id: 1 },
  { name: 'Progress', id: 2 },
  { name: 'Test', id: 3 },
  { name: 'Done', id: 4 },
];

export function columns(state = initialState, { type, payload }) {
  switch (type) {
    case RENAME_COLUMN: {
      console.log(payload);
      console.log(state);
      const newState = state.map(elem => {
        if (elem.id === payload.id) {
          elem.name = payload.name;
        }
        return elem;
      });
      return newState;
    }
    default:
      return state;
  }
}
