import { createReducer } from 'typesafe-actions';
import { State, Actions } from './types';
import {
  GITHUB_LOGIN_REQUEST,
  GITHUB_LOGIN_SUCCESS,
  GITHUB_LOGIN_FAILURE,
} from './actions';

const initialState: State = {
  currentUser: {
    id: '',
    email: '',
  },
  message: '',
};

const githubLoginField = createReducer<State, Actions>(initialState, {
  [GITHUB_LOGIN_REQUEST]: (state) => ({
    ...state,
  }),
  [GITHUB_LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    currentUser: action.payload.currentUser,
    message: null,
  }),
  [GITHUB_LOGIN_FAILURE]: (state, action) => ({
    ...state,

    message: action.payload.message,
  }),
});

export default githubLoginField;
