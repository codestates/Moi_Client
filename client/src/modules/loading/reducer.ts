import { createReducer } from 'typesafe-actions';
import { Actions, State } from './types';
import { START_LOADING, FINISH_LOADING } from './actions';

const initialState: State = {};

const loading = createReducer<State, Actions>(initialState, {
  [START_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: true,
  }),
  [FINISH_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: false,
  }),
});

export default loading;
