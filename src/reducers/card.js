import { ADD_CARD } from '../actions/actionTypes'

export function cardReducer(state = [], action) {
  switch (action.type) {
    case ADD_CARD:
      {
        console.log(action)
        return [
        ...state,
        {...action.card}
      ]}
      default: 
      return state
  }
}