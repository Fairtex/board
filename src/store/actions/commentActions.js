import { ADD_COMMENT, CHANGE_COMMENT_VALUE, DELETE_COMMENT } from '../actionTypes';

export const addComment = comment => ({ type: ADD_COMMENT, payload: { comment } });

export const changeComment = (id, value) => ({
  type: CHANGE_COMMENT_VALUE,
  payload: { id, value },
});

export const deleteComment = id => ({ type: DELETE_COMMENT, payload: { id } });
