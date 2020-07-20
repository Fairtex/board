import {
  ADD_CARD,
  CHANGE_CARD_DESCRIPTION,
  DELETE_CARD,
  RENAME_CARD,
} from '../actionTypes';

export function cards(state = [], { type, payload }) {
  switch (type) {
    case ADD_CARD: {
      console.log(payload);
      return [...state, payload.card];
    }
    case DELETE_CARD: {
      console.log(payload);
      const newState = state.filter(el => el.id !== payload.id);
      return newState;
    }
    case RENAME_CARD: {
      console.log(payload);
      const newState = state.map(item => {
        if (item.id === payload.id) {
          item.value = payload.value;
        }
        return item;
      });
      return newState;
    }
    case CHANGE_CARD_DESCRIPTION: {
      console.log(payload);
      const newState = state.map(item => {
        if (item.id === payload.id) {
          item.description = payload.description;
        }
        return item;
      });
      return newState;
    }
    default:
      return state;
  }
}
