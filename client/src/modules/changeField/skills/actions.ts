import { createAction } from 'typesafe-actions';

// ?   CONST ACTION_TYPE
export const SKILLS_CHANGE_FIELD = 'skillsFiled/SKIILS_CHANGE_FIELD';
export const ADD_SKILL_FIELD = 'skillsFiled/ADD_SKILL_FIELD';
export const DELETE_SKILL_FIELD = 'skiilsFiled/DELETE_SKILL_FIELD';

// ?   CREATE_ACTION_FUNTIONS
export const changeSkillField = createAction(
  SKILLS_CHANGE_FIELD,
  ({ index, key, value }) => ({
    index,
    key,
    value,
  }),
)();

export const addSkillField = createAction(
  ADD_SKILL_FIELD,
  ({ skill, desc }) => ({
    skill,
    desc,
  }),
)();

export const deleteSkillField = createAction(
  DELETE_SKILL_FIELD,
  ({ index }) => ({
    index,
  }),
)();
