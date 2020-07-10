import { ADD_CARD, DELETE_CARD, RENAME_CARD, CHANGE_CARD_DESCRIPTION } from '../actionTypes';

export const addCard = card => ({ type: ADD_CARD, card });

export const deleteCard = id => ({ type: DELETE_CARD, id });

export const renameCard = (id, name) => ({ type: RENAME_CARD, id, name });

export const changeDescription = (id, description) => ({ type: CHANGE_CARD_DESCRIPTION, id, description })