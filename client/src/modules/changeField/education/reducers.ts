import { createReducer } from 'typesafe-actions';
import { Actions, State } from './types';
import {
  EDUCATIONS_CHANGE_FIELD,
  ADD_EDUCATION_FIELD,
  DELETE_EDUCATION_FIELD,
  TOGGLE_EDU_DROPDOWN,
} from './actions';

const initialState: State = {
  educations: [],
};

const educationsField = createReducer<State, Actions>(initialState, {
  [ADD_EDUCATION_FIELD]: (state) => {
    return {
      ...state,
      educations: [
        ...state.educations,
        {
          eduTitle: '',
          eduDesc: '',
          start: '',
          end: '',
          dropDownToggle: false,
        },
      ],
    };
  },
  [EDUCATIONS_CHANGE_FIELD]: (state, action) => {
    const index = action.payload.index;
    const newEducations = [...state.educations];

    if (action.payload.key === 'eduTitle') {
      newEducations[index].eduTitle = action.payload.value;
    } else if (action.payload.key === 'eduDesc') {
      newEducations[index].eduDesc = action.payload.value;
    } else if (action.payload.key === 'start') {
      newEducations[index].start = action.payload.value;
    } else if (action.payload.key === 'end') {
      newEducations[index].end = action.payload.value;
    }

    return {
      ...state,
      educations: newEducations,
    };
  },
  [DELETE_EDUCATION_FIELD]: (state, action) => {
    const index = action.payload.index;
    const newEducations = [
      ...state.educations.filter((_, idx) => {
        return index !== idx;
      }),
    ];

    return {
      ...state,
      educations: newEducations,
    };
  },
  [TOGGLE_EDU_DROPDOWN]: (state, action) => {
    const index = action.payload.index;
    const newEducations = [...state.educations];
    newEducations[index].dropDownToggle = !newEducations[index].dropDownToggle;
    return {
      ...state,
      educations: newEducations,
    };
  },
});

export default educationsField;
