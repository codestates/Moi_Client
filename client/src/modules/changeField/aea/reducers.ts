import { createReducer } from 'typesafe-actions';
import { Actions, AeaState } from './types';
import {
  AEAS_CHANGE_FIELD,
  ADD_AEA_FIELD,
  DELETE_AEA_FIELD,
  LOAD_AEA_FIELD,
  TOGGLE_AEA_DROPDOWN,
  INIT_AEA_FIELD,
} from './actions';

const initialState: AeaState = {
  aeas: [],
};

const aeasField = createReducer<AeaState, Actions>(initialState, {
  [ADD_AEA_FIELD]: (state) => {
    return {
      ...state,
      aeas: [
        ...state.aeas,
        {
          aeaTitle: '',
          aeaDesc: '',
          aeaDate: '',
          dropDownToggle: false,
        },
      ],
    };
  },
  [AEAS_CHANGE_FIELD]: (state, action) => {
    const index = action.payload.index;
    const newAeas = [...state.aeas];

    if (action.payload.key === 'aeaTitle') {
      newAeas[index].aeaTitle = action.payload.value;
    } else if (action.payload.key === 'aeaDesc') {
      newAeas[index].aeaDesc = action.payload.value;
    } else if (action.payload.key === 'aeaDate') {
      newAeas[index].aeaDate = action.payload.value;
    }

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
  [LOAD_AEA_FIELD]: (state, action) => {
    const loadData = action.payload.state;
    return { ...state, ['aeas']: loadData };
  },
  [TOGGLE_AEA_DROPDOWN]: (state, action) => {
    const index = action.payload.index;
    const newAea = [...state.aeas];
    newAea[index].dropDownToggle = !newAea[index].dropDownToggle;
    return {
      ...state,
      ['aeas']: newAea,
    };
  },
  [INIT_AEA_FIELD]: (state) => {
    return {
      ...state,
      aeas: [],
    };
  },
});

export default aeasField;
