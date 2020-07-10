import { ADD_CARD, DELETE_CARD } from '../actionTypes'

export function cards(state = [], action) {
  switch (action.type) {
    case ADD_CARD:
      {
        console.log(action)
        return [ ...state, action.card ]
      }
    case DELETE_CARD:
      {
        console.log(action)
        return [ ...state, state.cards.filter(el => el.id !== action.id) ]
      }
    default: 
      return state
  }
}