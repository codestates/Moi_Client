import { createAsyncAction, createAction } from 'typesafe-actions';

export const CHECK_USER_REQUEST = 'CHECK_USER_REQUEST';
export const CHECK_USER_SUCCESS = 'CHECK_USER_SUCCESS';
export const CHECK_USER_FAILURE = 'CHECK_USER_FAILURE';

export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST';

export const WITHDRAWAL_USET_REQUEST = 'WITHDRAWAL_USER_REQUEST';

interface CheckSuccess {
  isLoggedIn: boolean;
}

interface CheckFailure {
  message: string;
}

export const checkUser = createAsyncAction(
  CHECK_USER_REQUEST,
  CHECK_USER_SUCCESS,
  CHECK_USER_FAILURE,
)<string, CheckSuccess, CheckFailure>();

export const logoutUser = createAction(LOGOUT_USER_REQUEST, ({ state }) => ({
  state,
}))();

export const withdrawalUser = createAction(WITHDRAWAL_USET_REQUEST)();
