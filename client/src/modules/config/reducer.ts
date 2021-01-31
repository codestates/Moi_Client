import { createReducer } from 'typesafe-actions';
import { Actions, ConfigState } from './types';
import { SELECT_TEMPLATE, ON_LOGIN_MODAL, ON_UPLOAD_MODAL } from './actions';

const initialState: ConfigState = {
  resume: {
    template: 0,
  },
  modal: {
    loginModal: false,
    uploadModal: false,
  },
};

const config = createReducer<ConfigState, Actions>(initialState, {
  [SELECT_TEMPLATE]: (state, action) => {
    return {
      ...state,
      resume: {
        ...state.resume,
        ['template']: action.payload.value,
      },
    };
  },
  [ON_LOGIN_MODAL]: (state, action) => {
    return {
      ...state,
      modal: {
        ...state.modal,
        ['loginModal']: action.payload.state,
      },
    };
  },
  [ON_UPLOAD_MODAL]: (state, action) => {
    return {
      ...state,
      modal: {
        ...state.modal,
        ['uploadModal']: action.payload.state,
      },
    };
  },
});

export default config;
