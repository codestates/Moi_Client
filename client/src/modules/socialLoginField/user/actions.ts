import { createAsyncAction } from 'typesafe-actions';

export const CHECK_USER_REQUEST = 'CHECK_USER_REQUEST';
export const CHECK_USER_SUCCESS = 'CHECK_USER_SUCCESS';
export const CHECK_USER_FAILURE = 'CHECK_USER_FAILURE';

interface Success {
  isLoggedIn: boolean;
}

interface Failure {
  message: string;
}

export const checkUser = createAsyncAction(
  CHECK_USER_REQUEST,
  CHECK_USER_SUCCESS,
  CHECK_USER_FAILURE,
)<string, Success, Failure>();
