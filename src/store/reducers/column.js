import { v1 as uuid } from 'uuid';

import { RENAME_COLUMN } from '../actionTypes';

const initialState = [
  { name: 'toDo', id: uuid() },
  { name: 'Progress', id: uuid() },
  { name: 'Test', id: uuid() },
  { name: 'Done', id: uuid() },
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
