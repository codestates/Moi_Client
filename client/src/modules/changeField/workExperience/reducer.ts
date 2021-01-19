import { createReducer } from 'typesafe-actions';
import { Actions, State } from './types';
import {
  SKILLS_CHANGE_FIELD,
  ADD_EXPERIENCE_FIELD,
  DELETE_SKILL_FIELD,
  ADD_WORK_FIELD,
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
  [ADD_WORK_FIELD]: (state, action) => {
    const index = action.payload.index;
    const newWorkExperience = [...state.workExperience];
    const description = { description: '' };
    newWorkExperience[index].desc.push(description);
    return {
      ...state,
      workExperience: newWorkExperience,
    };
  },
  // [SKILLS_CHANGE_FIELD]: (state, action) => {
  //   const index = action.payload.index;
  //   const newSkills = [...state.workExperience];

  //   action.payload.key === 'skill'
  //     ? (newSkills[index].skill = action.payload.value)
  //     : (newSkills[index].desc = action.payload.value);

  //   return {
  //     ...state,
  //     skills: newSkills,
  //   };
  // },
  // [DELETE_SKILL_FIELD]: (state, action) => {
  //   const index = action.payload.index;
  //   const newSkills = [
  //     ...state.workExperience.filter((ele, idx) => {
  //       return index !== idx;
  //     }),
  //   ];

  //   return {
  //     ...state,
  //     skills: newSkills,
  //   };
  // },
});

export default workExperienceField;
