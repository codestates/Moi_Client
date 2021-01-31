import { createReducer } from 'typesafe-actions';
import { Actions, ConfigState } from './types';
import {
  SELECT_TEMPLATE,
  ON_LOGIN_MODAL,
  ON_UPLOAD_MODAL,
  ON_DELETE_MODAL,
} from './actions';

const initialState: ConfigState = {
  resume: {
    template: 0,
  },
  modal: {
    loginModal: false,
    uploadModal: false,
    deleteModal: {
      modal: false,
      resumeId: '',
      title: null,
    },
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
  [ON_DELETE_MODAL]: (state, action) => {
    return {
      ...state,
      modal: {
        ...state.modal,
        ['deleteModal']: {
          modal: action.payload.state,
          resumeId: action.payload.resumeId,
          title: action.payload.title,
        },
      },
    };
  },
});

export default config;
