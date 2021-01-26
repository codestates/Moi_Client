import { createReducer } from 'typesafe-actions';
import { Actions, ExperienceState } from './types';
import {
  EXPERIENCE_CHANGE_FIELD,
  ADD_EXPERIENCE_FIELD,
  ADD_JOB_DESC_FIELD,
  LOAD_EXPERIENCE_FIELD,
  JOB_DESC_CHANGE_FILED,
  DELETE_EXPERIENCE_FIELD,
  DELETE_JOB_DESC_FIELD,
  CHECK_IN_OFFICE,
} from './actions';

const initialState: ExperienceState = {
  workExperience: [],
};

const workExperienceField = createReducer<ExperienceState, Actions>(
  initialState,
  {
    [ADD_EXPERIENCE_FIELD]: (state) => {
      return {
        ...state,
        workExperience: [
          ...state.workExperience,
          {
            companyName: '',
            start: '',
            end: '',
            inOffice: false,
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
    [CHECK_IN_OFFICE]: (state, action) => {
      const index = action.payload.experienceIndex;
      const newExperiences = [...state.workExperience];
      newExperiences[index].inOffice = action.payload.state;

      return {
        ...state,
        workExperience: newExperiences,
      };
    },
    [LOAD_EXPERIENCE_FIELD]: (state, action) => {
      const loadData = action.payload.state;
      return { ...state, ['workExperience']: loadData };
    },
  },
);

export default workExperienceField;
