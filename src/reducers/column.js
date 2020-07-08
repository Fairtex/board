import { RENAME_COLUMN } from '../actionTypes';
import { v1 as uuid } from 'uuid';

const initialState = [
  { name: 'toDo', id: uuid() },
  { name: 'Progress', id: uuid() },
  { name: 'Test', id: uuid() },
  { name: 'Done', id: uuid() },
]

export function columns(state = initialState, action) {
  switch (action.type) {
    case RENAME_COLUMN: {
      console.log(action)
      return [ ...state, {changedColumnName: action.name} ]
    }
    default:
      return state
  }
}