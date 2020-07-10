import { combineReducers } from 'redux';
import { cards } from './card';
import { columns } from './column';

export const boardApp = combineReducers({
  cards,
  columns
})