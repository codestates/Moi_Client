import { createAction } from 'typesafe-actions';

export const GOOGLE_LOGIN_REQUEST = 'GOOGLE_LOGIN_REQUEST';
export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS';
export const GOOGLE_LOGIN_FAILURE = 'GOOGLE_LOGIN_FAILURE';

export const googleLoginRequest = createAction(
  GOOGLE_LOGIN_REQUEST,
  ({ authorizationCode }) => ({
    authorizationCode,
  }),
)();

export const googleLoginSuccess = createAction(
  GOOGLE_LOGIN_SUCCESS,
  ({ currentUser, message }) => ({
    currentUser,
    message,
  }),
)();

export const googleLoginFailure = createAction(
  GOOGLE_LOGIN_FAILURE,
  ({ currentUser, message }) => ({
    currentUser,
    message,
  }),
)();
