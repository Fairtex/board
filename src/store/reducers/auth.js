import { AUTH_ENTER, NO_AUTH_ENTER, USER_EXIT } from '../actionTypes';

export function authorization(state = '', { type, payload }) {
  switch (type) {
    case AUTH_ENTER: {
      const authState = payload.user;
      return authState;
    }
    case NO_AUTH_ENTER: {
      const noAuthState = 'guest';
      return noAuthState;
    }
    case USER_EXIT: {
      const exitUserState = '';
      return exitUserState;
    }
    default:
      return state;
  }
}
