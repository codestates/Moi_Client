import { createAction } from 'typesafe-actions';

// ?  =======================
// ?   CONST ACTION_TYPE
// ?  =======================

//* WORK_EXPERIENCE_TYPES
export const ADD_EXPERIENCE_FIELD = 'workExperience/ADD_EXPERIENCE_FIELD';
export const EXPERIENCE_CHANGE_FIELD = 'workExperience/EXPERIENCE_CHANGE_FIELD';
export const DELETE_EXPERIENCE_FIELD = 'workExperience/DELETE_EXPERIENCE_FIELD';

//* JOB_DESCRIPTION_TYPES
export const ADD_JOB_DESC_FIELD = 'workExperience/ADD_JOB_DESC_FIELD';
export const JOB_DESC_CHANGE_FILED = 'workExperience/JOB_DESC_CHANGE_FILED';
export const DELETE_JOB_DESC_FIELD = 'workExperience/DELETE_JOB_DESC_FIELD';
export const CHECK_IN_OFFICE = 'workExperience/CHECK_IN_OFFICE';

// ?  =======================
// ?   CREATE_ACTION_FUNTIONS
// ?  =======================

// * WORK_EXPERIENCE_ACTIONS
export const addExperienceField = createAction(
  ADD_EXPERIENCE_FIELD,
  () => ({}),
)();

export const changeExperienceField = createAction(
  EXPERIENCE_CHANGE_FIELD,
  ({ index, key, value }) => ({
    index,
    key,
    value,
  }),
)();

export const deleteExperienceField = createAction(
  DELETE_EXPERIENCE_FIELD,
  ({ index }) => ({
    index,
  }),
)();

// * JOB_DESCRIPTION_ACTIONS
export const addJobDescField = createAction(
  ADD_JOB_DESC_FIELD,
  ({ index }) => ({
    index,
  }),
)();

export const changeJobDescField = createAction(
  JOB_DESC_CHANGE_FILED,
  ({ experienceIndex, descIndex, value }) => ({
    experienceIndex,
    descIndex,
    value,
  }),
)();

export const deleteJobDescField = createAction(
  DELETE_JOB_DESC_FIELD,
  ({ experienceIndex, jobDescIndex }) => ({
    experienceIndex,
    jobDescIndex,
  }),
)();

export const checkInOffice = createAction(
  CHECK_IN_OFFICE,
  ({ experienceIndex, state }) => ({
    experienceIndex,
    state,
  }),
)();
