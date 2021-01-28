import { createAction } from 'typesafe-actions';

//? ACTION_TYPES
export const GET_MYPAGE_REQUEST = 'GET_MYPAGE_REQUEST';
export const GET_MYPAGE_SUCCESS = 'GET_MYPAGE_SUCCESS';
export const GET_MYPAGE_FAILURE = 'GET_MYPAGE_FAILURE';

export const mypageGetRequest = createAction(GET_MYPAGE_REQUEST)();

export const mypageGetSuccess = createAction(
  GET_MYPAGE_SUCCESS,
  ({ list, isGetList }) => ({
    list,
    isGetList,
  }),
)();
export const mypageGetFailure = createAction(
  GET_MYPAGE_FAILURE,
  ({ message }) => ({
    message,
  }),
)();
