import { createReducer } from 'typesafe-actions';
import { Actions, ConfigState } from './types';
import { SELECT_TEMPLATE } from './actions';

const initialState: ConfigState = {
  resume: {
    template: 0,
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
});

export default config;
