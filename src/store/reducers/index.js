import { combineReducers } from 'redux';

import { authorization } from './auth';
import { cards } from './card';
import { columns } from './column';
import { comments } from './comment';

export const boardApp = combineReducers({
  authorization,
  cards,
  columns,
  comments,
});
