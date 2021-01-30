import { createAction } from 'typesafe-actions';

export const KAKAO_LOGIN_REQUEST = 'KAKAO_LOGIN_REQUEST';
export const KAKAO_LOGIN_SUCCESS = 'KAKAO_LOGIN_SUCCESS';
export const KAKAO_LOGIN_FAILURE = 'KAKAO_LOGIN_FAILURE';

export const kakaoLoginRequest = createAction(
  KAKAO_LOGIN_REQUEST,
  ({ authorizationCode }) => ({
    authorizationCode,
  }),
)();

export const kakaoLoginSuccess = createAction(
  KAKAO_LOGIN_SUCCESS,
  ({ currentUser, message }) => ({
    currentUser,
    message,
  }),
)();

export const kakaoLoginFailure = createAction(
  KAKAO_LOGIN_FAILURE,
  ({ currentUser, message }) => ({
    currentUser,
    message,
  }),
)();
