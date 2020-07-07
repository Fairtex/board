import { combineReducers } from 'redux';
import { cardReducer } from './card';

export const boardApp = combineReducers({
  cards: cardReducer
})