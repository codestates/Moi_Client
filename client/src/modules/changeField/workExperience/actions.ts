import { createAction } from 'typesafe-actions';

// ?   CONST ACTION_TYPE
export const SKILLS_CHANGE_FIELD = 'workExperience/SKIILS_CHANGE_FIELD';
export const ADD_EXPERIENCE_FIELD = 'workExperience/ADD_EXPERIENCE_FIELD';
export const DELETE_SKILL_FIELD = 'workExperience/DELETE_SKILL_FIELD';
export const ADD_WORK_FIELD = 'workExperience/ADD_WORK_FIELD';

// ?   CREATE_ACTION_FUNTIONS
export const changeSkillField = createAction(
  SKILLS_CHANGE_FIELD,
  ({ index, key, value }) => ({
    index,
    key,
    value,
  }),
)();

export const addExperienceField = createAction(
  ADD_EXPERIENCE_FIELD,
  () => ({}),
)();

export const addWorkField = createAction(ADD_WORK_FIELD, ({ index }) => ({
  index,
}))();

export const deleteSkillField = createAction(
  DELETE_SKILL_FIELD,
  ({ index }) => ({
    index,
  }),
)();
