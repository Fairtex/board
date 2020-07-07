import { ADD_CARD } from './actionTypes';

export function addCard(card) {
  return {
    type: ADD_CARD,
    card
  }
}