import { createReducer } from 'typesafe-actions';
import { State, Actions } from './types';
import {
  GET_MYPAGE_REQUEST,
  GET_MYPAGE_SUCCESS,
  GET_MYPAGE_FAILURE,
} from './actions';

const initialState: State = {
  list: [],
  message: '',
  isGetList: null,
};

const mypageRequestField = createReducer<State, Actions>(initialState, {
  [GET_MYPAGE_SUCCESS]: (state, action) => ({
    ...state,
    isGetList: action.payload.isGetList,
    list: action.payload.list,
  }),
  [GET_MYPAGE_FAILURE]: (state, action) => ({
    ...state,
    message: action.payload.message,
  }),
  [GET_MYPAGE_REQUEST]: (state) => ({ ...state }),
});
export default mypageRequestField;
