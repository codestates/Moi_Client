import { createAction } from 'typesafe-actions';

// ?   CONST ACTION_TYPE
export const SKILLS_CHANGE_FIELD = 'skillsFiled/SKIILS_CHANGE_FIELD';
export const ADD_SKILL_FIELD = 'skillsFiled/ADD_SKILL_FIELD';
export const DELETE_SKILL_FIELD = 'skiilsFiled/DELETE_SKILL_FIELD';
export const LOAD_SKILLS_FIELD = 'skiilsFiled/LOAD_SKILLS_FIELD';
export const INIT_SKILLS_FIELD = 'skiilsFiled/INIT_SKILLS_FIELD';

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

export const loadSkillsField = createAction(LOAD_SKILLS_FIELD, ({ state }) => ({
  state,
}))();

export const initSkillsField = createAction(INIT_SKILLS_FIELD, ({}) => ({}))();
