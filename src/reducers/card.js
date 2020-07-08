import { ADD_CARD, DELETE_CARD } from '../actionTypes'

export function cards(state = [], action) {
  switch (action.type) {
    case ADD_CARD:
      {
        console.log(action)
        return [ ...state, {newCard: action.card} ]
      }
    case DELETE_CARD:
      {
        console.log(action)
        return [ ...state, {deletedCard: action.id} ]
      }
    default: 
      return state
  }
}