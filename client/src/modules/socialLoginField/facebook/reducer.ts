import { createReducer } from 'typesafe-actions';
import { State, Actions } from './types';
import {
  KAKAO_LOGIN_REQUEST,
  KAKAO_LOGIN_SUCCESS,
  KAKAO_LOGIN_FAILURE,
} from './actions';

const initialState: State = {
  currentUser: {
    id: '',
    email: '',
    thumbnail: '',
  },
  message: '',
};

const kakaoLoginField = createReducer<State, Actions>(initialState, {
  [KAKAO_LOGIN_REQUEST]: (state) => ({
    ...state,
  }),
  [KAKAO_LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    currentUser: action.payload.currentUser,
    message: null,
  }),
  [KAKAO_LOGIN_FAILURE]: (state, action) => ({
    ...state,
    message: action.payload.message,
  }),
});

export default kakaoLoginField;
