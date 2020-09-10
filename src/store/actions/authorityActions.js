import { AUTH_ENTER, NO_AUTH_ENTER, USER_EXIT } from '../actionTypes';

export const userExit = () => ({
  type: USER_EXIT,
});

export const authorizedEnter = user => ({
  type: AUTH_ENTER,
  payload: { user },
});

export const unAuthorizedEnter = () => ({
  type: NO_AUTH_ENTER,
});
