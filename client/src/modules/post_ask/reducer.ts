import { createReducer } from 'typesafe-actions';
import { State, Actions } from './types';
import {
  POST_ASK_REQUEST,
  POST_ASK_SUCCESS,
  POST_ASK_FAILURE,
} from './actions';

const initialState: State = {
  isMailSucssessed: null,
  message: '',
};

const askRequestField = createReducer<State, Actions>(initialState, {
  [POST_ASK_SUCCESS]: (state, action) => ({
    ...state,
    isMailSucssessed: action.payload.isMailSucssessed,
  }),
  [POST_ASK_FAILURE]: (state, action) => ({
    ...state,
    message: action.payload.message,
  }),
  [POST_ASK_REQUEST]: (state) => ({ ...state }),
});
export default askRequestField;
