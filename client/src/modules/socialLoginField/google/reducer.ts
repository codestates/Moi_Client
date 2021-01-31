import { createReducer } from 'typesafe-actions';
import { State, Actions } from './types';
import {
  GOOGLE_LOGIN_REQUEST,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAILURE,
} from './actions';

const initialState: State = {
  currentUser: {
    id: '',
    email: '',
    thumbnail: '',
  },
  message: '',
};

const googleLoginField = createReducer<State, Actions>(initialState, {
  [GOOGLE_LOGIN_REQUEST]: (state) => ({
    ...state,
  }),
  [GOOGLE_LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    currentUser: action.payload.currentUser,
    message: null,
  }),
  [GOOGLE_LOGIN_FAILURE]: (state, action) => ({
    ...state,
    message: action.payload.message,
  }),
});

export default googleLoginField;
