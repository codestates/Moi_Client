import { createReducer } from 'typesafe-actions';
import { CheckState, Actions } from './types';
import {
  CHECK_USER_REQUEST,
  CHECK_USER_SUCCESS,
  CHECK_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  WITHDRAWAL_USET_REQUEST,
} from './actions';

const initialState: CheckState = {
  isLoggedIn: false,
  message: null,
  logout: false,
};

const checkUserField = createReducer<CheckState, Actions>(initialState, {
  [CHECK_USER_REQUEST]: (state) => ({
    ...state,
  }),
  [CHECK_USER_SUCCESS]: (state, action) => ({
    ...state,
    isLoggedIn: action.payload.isLoggedIn,
  }),
  [CHECK_USER_FAILURE]: (state, action) => ({
    ...state,
    message: action.payload.message,
  }),
  [LOGOUT_USER_REQUEST]: (state, action) => ({
    ...state,
    logout: action.payload.state,
  }),
  [WITHDRAWAL_USET_REQUEST]: (state) => ({
    ...state,
  }),
});

export default checkUserField;
