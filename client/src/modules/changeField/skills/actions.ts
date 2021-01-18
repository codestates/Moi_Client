import { createAction } from 'typesafe-actions';

// ?   CONST ACTION_TYPE
export const SKILLS_CHANGE_FIELD = 'skillsFiled/SKIILS_CHANGE_FIELD';
export const ADD_SKILL_FIELD = 'skillsFiled/ADD_SKILL_FIELD';
// ?   CREATE_ACTION_FUNTIONS
export const changeSkillField = createAction(
  SKILLS_CHANGE_FIELD,
  ({ key, value }) => ({
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
