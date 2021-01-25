import { createReducer } from 'typesafe-actions';
import { State, Actions } from './types';
import {
  FACEBOOK_LOGIN_REQUEST,
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAILURE,
} from './actions';

const initialState: State = {
  currentUser: {
    id: '',
    email: '',
  },
  message: '',
};

const facebookLoginField = createReducer<State, Actions>(initialState, {
  [FACEBOOK_LOGIN_REQUEST]: (state) => ({
    ...state,
  }),
  [FACEBOOK_LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    currentUser: action.payload.currentUser,
    message: null,
  }),
  [FACEBOOK_LOGIN_FAILURE]: (state, action) => ({
    ...state,
    currentUser: {
      id: null,
      email: null,
    },
    message: action.payload.message,
  }),
});

export default facebookLoginField;
