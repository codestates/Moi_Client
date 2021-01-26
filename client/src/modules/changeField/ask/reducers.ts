import { createReducer } from 'typesafe-actions';
import { Actions, State } from './types';
import { ASK_CHANGE_FIELD } from './actions';

const initialState: State = {
  ask: {
    username: '',
    email: '',
    title: '',
    desc: '',
  },
};

const askField = createReducer<State, Actions>(initialState, {
  [ASK_CHANGE_FIELD]: (state, action) => {
    const key = action.payload.key;

    if (
      key === 'username' ||
      key === 'email' ||
      key === 'title' ||
      key === 'desc'
    ) {
      return {
        ...state,
        ask: {
          ...state.ask,
          [key]: action.payload.value,
        },
      };
    } else {
      return {
        ...state,
        ask: {
          ...state.ask,
        },
      };
    }
  },
});

export default askField;
