import { createReducer } from 'typesafe-actions';
import { Actions, State } from './types';
import {
  EDUCATIONS_CHANGE_FIELD,
  ADD_EDUCATION_FIELD,
  DELETE_EDUCATION_FIELD,
} from './actions';

const initialState: State = {
  educations: [],
};

const educationsField = createReducer<State, Actions>(initialState, {
  [ADD_EDUCATION_FIELD]: (state) => {
    return {
      ...state,
      educations: [...state.educations, { eduTitle: '', eduDesc: '' }],
    };
  },
  [EDUCATIONS_CHANGE_FIELD]: (state, action) => {
    const index = action.payload.index;
    const newEducations = [...state.educations];

    action.payload.key === 'eduTitle'
      ? (newEducations[index].eduTitle = action.payload.value)
      : (newEducations[index].eduDesc = action.payload.value);

    return {
      ...state,
      educations: newEducations,
    };
  },
  [DELETE_EDUCATION_FIELD]: (state, action) => {
    const index = action.payload.index;
    const newEducations = [
      ...state.educations.filter((ele, idx) => {
        return index !== idx;
      }),
    ];

    return {
      ...state,
      educations: newEducations,
    };
  },
});

export default educationsField;
