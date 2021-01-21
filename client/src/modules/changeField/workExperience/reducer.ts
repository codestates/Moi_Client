import { createReducer } from 'typesafe-actions';
import { Actions, State } from './types';
import {
  EXPERIENCE_CHANGE_FIELD,
  ADD_EXPERIENCE_FIELD,
  ADD_JOB_DESC_FIELD,
  JOB_DESC_CHANGE_FILED,
  DELETE_EXPERIENCE_FIELD,
  DELETE_JOB_DESC_FIELD,
} from './actions';

const initialState: State = {
  workExperience: [],
};

const workExperienceField = createReducer<State, Actions>(initialState, {
  [ADD_EXPERIENCE_FIELD]: (state) => {
    return {
      ...state,
      workExperience: [
        ...state.workExperience,
        {
          companyName: '',
          start: '',
          end: '',
          positionName: '',
          desc: [],
        },
      ],
    };
  },
  [EXPERIENCE_CHANGE_FIELD]: (state, action) => {
    const index = action.payload.index;
    const newWorkExperience = [...state.workExperience];
    if (action.payload.key === 'companyName')
      newWorkExperience[index].companyName = action.payload.value;
    if (action.payload.key === 'start')
      newWorkExperience[index].start = action.payload.value;
    if (action.payload.key === 'end')
      newWorkExperience[index].end = action.payload.value;
    if (action.payload.key === 'positionName')
      newWorkExperience[index].positionName = action.payload.value;

    return {
      ...state,
      workExperience: newWorkExperience,
    };
  },
  [ADD_JOB_DESC_FIELD]: (state, action) => {
    const index = action.payload.index;
    const newWorkExperience = [...state.workExperience];
    const description = { description: '' };
    newWorkExperience[index].desc.push(description);
    return {
      ...state,
      workExperience: newWorkExperience,
    };
  },
  [JOB_DESC_CHANGE_FILED]: (state, action) => {
    const experienceIndex = action.payload.experienceIndex;
    const descIndex = action.payload.descIndex;
    const newWorkExperience = [...state.workExperience];

    newWorkExperience[experienceIndex].desc[descIndex].description =
      action.payload.value;

    return {
      ...state,
      workExperience: newWorkExperience,
    };
  },
  [DELETE_EXPERIENCE_FIELD]: (state, action) => {
    const index = action.payload.index;
    const newExperiences = [
      ...state.workExperience.filter((ele, idx) => {
        return index !== idx;
      }),
    ];
    return {
      ...state,
      workExperience: newExperiences,
    };
  },
  [DELETE_JOB_DESC_FIELD]: (state, action) => {
    const experienceIndex = action.payload.experienceIndex;
    const descIndex = action.payload.jobDescIndex;

    const newExperiences = [...state.workExperience];

    newExperiences[experienceIndex].desc = newExperiences[
      experienceIndex
    ].desc.filter((_, idx) => {
      return descIndex !== idx;
    });

    return {
      ...state,
      workExperience: newExperiences,
    };
  },
});

export default workExperienceField;