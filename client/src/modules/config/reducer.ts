import { createReducer } from 'typesafe-actions';
import { Actions, State } from './types';
import { SELECT_TEMPLATE } from './actions';

const initialState: State = {
  resume: {
    template: 0,
  },
};

const config = createReducer<State, Actions>(initialState, {
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
