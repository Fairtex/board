import { AUTH_ENTER, NO_AUTH_ENTER, USER_EXIT } from '../actionTypes';

export const userExit = () => ({
  type: USER_EXIT,
});

export const authorizedEnter = userName => ({
  type: AUTH_ENTER,
  payload: { userName },
});

export const unAuthorizedEnter = () => ({
  type: NO_AUTH_ENTER,
  payload: 'guest',
});
