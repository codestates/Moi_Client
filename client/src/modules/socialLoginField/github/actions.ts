import { createAction } from 'typesafe-actions';

export const GITHUB_LOGIN_REQUEST = 'GITHUB_LOGIN_REQUEST';
export const GITHUB_LOGIN_SUCCESS = 'GITHUB_LOGIN_SUCCESS';
export const GITHUB_LOGIN_FAILURE = 'GITHUB_LOGIN_FAILURE';

export const githubLoginRequest = createAction(
  GITHUB_LOGIN_REQUEST,
  ({ authorizationCode }) => ({
    authorizationCode,
  }),
)();

export const githubLoginSuccess = createAction(
  GITHUB_LOGIN_SUCCESS,
  ({ currentUser, message }) => ({
    currentUser,
    message,
  }),
)();

export const githubLoginFailure = createAction(
  GITHUB_LOGIN_FAILURE,
  ({ currentUser, message }) => ({
    currentUser,
    message,
  }),
)();
