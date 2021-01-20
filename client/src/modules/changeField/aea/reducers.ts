import { createReducer } from 'typesafe-actions';
import { Actions, State } from './types';
import { AEAS_CHANGE_FIELD, ADD_AEA_FIELD, DELETE_AEA_FIELD } from './actions';

const initialState: State = {
  aeas: [],
};

const aeasField = createReducer<State, Actions>(initialState, {
  [ADD_AEA_FIELD]: (state) => {
    return {
      ...state,
      aeas: [...state.aeas, { aeaTitle: '', aeaDesc: '' }],
    };
  },
  [AEAS_CHANGE_FIELD]: (state, action) => {
    const index = action.payload.index;
    const newAeas = [...state.aeas];

    action.payload.key === 'aeaTitle'
      ? (newAeas[index].aeaTitle = action.payload.value)
      : (newAeas[index].aeaDesc = action.payload.value);

    return {
      ...state,
      aeas: newAeas,
    };
  },
  [DELETE_AEA_FIELD]: (state, action) => {
    const index = action.payload.index;
    const newAeas = [
      ...state.aeas.filter((ele, idx) => {
        return index !== idx;
      }),
    ];

    return {
      ...state,
      aeas: newAeas,
    };
  },
});

export default aeasField;
