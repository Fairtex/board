import {
  ADD_CARD,
  CHANGE_CARD_DESCRIPTION,
  DELETE_CARD,
  RENAME_CARD,
} from '../actionTypes';

export const addCard = card => ({ type: ADD_CARD, payload: { card } });

export const deleteCard = id => ({ type: DELETE_CARD, payload: { id } });

export const renameCard = (id, value) => ({ type: RENAME_CARD, payload: { id, value } });

export const changeDescription = (id, description) => ({
  type: CHANGE_CARD_DESCRIPTION,
  payload: { id, description },
});
