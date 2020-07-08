import { ADD_CARD, DELETE_CARD, RENAME_CARD, CHANGE_CARD_DESCRIPTION } from '../actionTypes';

export function addCard(card) {
  return { type: ADD_CARD, card }
}

export function deleteCard(id) {
  return { type: DELETE_CARD, id }
}

export function renameCard(id, name) {
  return { type: RENAME_CARD, id, name}
}

export function changeDescription(id, description) {
  return { type: CHANGE_CARD_DESCRIPTION, id, description}
}