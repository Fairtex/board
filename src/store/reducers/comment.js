import { ADD_COMMENT, CHANGE_COMMENT_VALUE, DELETE_COMMENT } from '../actionTypes';

export function comments(state = [], { type, payload }) {
  switch (type) {
    case ADD_COMMENT: {
      console.log(payload);
      return [...state, payload.comment];
    }
    case DELETE_COMMENT: {
      console.log(payload);
      const newState = state.filter(el => el.id !== payload.id);
      return newState;
    }
    case CHANGE_COMMENT_VALUE: {
      console.log(payload);
      const newState = state.map(item => {
        if (item.id === payload.id) {
          item.value = payload.value;
        }
        return item;
      });
      return newState;
    }
    default:
      return state;
  }
}
