import { RENAME_COLUMN } from '../actionTypes';
import { v1 as uuid } from 'uuid';

const initialState = [
  { name: 'toDo', id: 1 },
  { name: 'Progress', id: 2 },
  { name: 'Test', id: 3 },
  { name: 'Done', id: 4 },
]

export function columns(state = initialState, action) {
  switch (action.type) {
    case RENAME_COLUMN: {
      console.log(action);
      console.log(state);
      return [ ...state, state.find(el => el.id === action.id).name = action.name]
    }
    default:
      return state
  }
}