import { createReducer } from 'typesafe-actions';
import { Actions, SkillsState } from './types';
import {
  SKILLS_CHANGE_FIELD,
  ADD_SKILL_FIELD,
  DELETE_SKILL_FIELD,
} from './actions';

const initialState: SkillsState = {
  skills: [],
};

const skillsField = createReducer<SkillsState, Actions>(initialState, {
  [ADD_SKILL_FIELD]: (state) => {
    return {
      ...state,
      skills: [...state.skills, { skill: '', desc: '' }],
    };
  },
  [SKILLS_CHANGE_FIELD]: (state, action) => {
    const index = action.payload.index;
    const newSkills = [...state.skills];

    action.payload.key === 'skill'
      ? (newSkills[index].skill = action.payload.value)
      : (newSkills[index].desc = action.payload.value);

    return {
      ...state,
      skills: newSkills,
    };
  },
  [DELETE_SKILL_FIELD]: (state, action) => {
    const index = action.payload.index;
    const newSkills = [
      ...state.skills.filter((ele, idx) => {
        return index !== idx;
      }),
    ];

    return {
      ...state,
      skills: newSkills,
    };
  },
});

export default skillsField;
