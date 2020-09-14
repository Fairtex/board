import { combineReducers } from 'redux';

import { currentUser } from './auth';
import { cards } from './card';
import { columns } from './column';
import { comments } from './comment';

export const boardApp = combineReducers({
  currentUser,
  cards,
  columns,
  comments,
});
