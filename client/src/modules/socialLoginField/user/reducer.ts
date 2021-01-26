import { createReducer } from 'typesafe-actions';
import { State, Actions } from './types';
import {
  CHECK_USER_REQUEST,
  CHECK_USER_SUCCESS,
  CHECK_USER_FAILURE,
} from './actions';

const initialState: State = {
  isLoggedIn: false,
  message: null,
};

const checkUserField = createReducer<State, Actions>(initialState, {
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
});

export default checkUserField;
