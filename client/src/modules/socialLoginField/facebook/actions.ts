import { createAction } from 'typesafe-actions';

export const FACEBOOK_LOGIN_REQUEST = 'FACEBOOK_LOGIN_REQUEST';
export const FACEBOOK_LOGIN_SUCCESS = 'FACEBOOK_LOGIN_SUCCESS';
export const FACEBOOK_LOGIN_FAILURE = 'FACEBOOK_LOGIN_FAILURE';

export const facebookLoginRequest = createAction(
  FACEBOOK_LOGIN_REQUEST,
  ({ authorizationCode }) => ({
    authorizationCode,
  }),
)();

export const facebookLoginSuccess = createAction(
  FACEBOOK_LOGIN_SUCCESS,
  ({ currentUser, message }) => ({
    currentUser,
    message,
  }),
)();

export const facebookLoginFailure = createAction(
  FACEBOOK_LOGIN_FAILURE,
  ({ currentUser, message }) => ({
    currentUser,
    message,
  }),
)();
