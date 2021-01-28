import { createReducer } from 'typesafe-actions';
import { State, Actions } from './types';
import {
  SAVE_RESUME_FIELD_REQUEST,
  SAVE_RESUME_FIELD_SUCCESS,
  SAVE_RESUME_FIELD_FAILURE,
} from './actions';

const initialState: State = {
  saveResume: {
    save: null,
    message: null,
  },
};

const asyncResumeField = createReducer<State, Actions>(initialState, {
  [SAVE_RESUME_FIELD_REQUEST]: (state) => ({
    ...state,
  }),
  [SAVE_RESUME_FIELD_SUCCESS]: (state, action) => ({
    ...state,
    saveResume: {
      ['save']: action.payload.save,
      ['message']: null,
    },
  }),
  [SAVE_RESUME_FIELD_FAILURE]: (state, action) => ({
    ...state,
    saveResume: {
      ['save']: false,
      ['message']: action.payload.message,
    },
  }),
});
export default asyncResumeField;
