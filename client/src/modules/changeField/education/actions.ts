import { createAction } from 'typesafe-actions';

export const EDUCATIONS_CHANGE_FIELD =
  'educationsField/EDUCATIONS_CHANGE_FIELD';
export const ADD_EDUCATION_FIELD = 'educationsField/ADD_EDUCATION_FIELD';
export const DELETE_EDUCATION_FIELD = 'educationsField/DELETE_EDUCATION_FIELD';
export const TOGGLE_EDU_DROPDOWN = 'educationsField/TOGGLE_EDU_DROPDOWN';
export const LOAD_EDUCATION_FIELD = 'educationsField/LOAD_EDUCATION_FIELD';
export const INIT_EDUCATION_FIELD = 'educationsField/INIT_EDUCATION_FIELD';

export const changeEducationField = createAction(
  EDUCATIONS_CHANGE_FIELD,
  ({ index, key, value }) => ({
    index,
    key,
    value,
  }),
)();

export const addEducationField = createAction(
  ADD_EDUCATION_FIELD,
  () => ({}),
)();

export const deleteEducationField = createAction(
  DELETE_EDUCATION_FIELD,
  ({ index }) => ({
    index,
  }),
)();

export const loadEducationField = createAction(
  LOAD_EDUCATION_FIELD,
  ({ state }) => ({
    state,
  }),
)();

export const initEducationField = createAction(
  INIT_EDUCATION_FIELD,
  ({}) => ({}),
)();

export const toggleEduDropdown = createAction(
  TOGGLE_EDU_DROPDOWN,
  ({ index, state }) => ({
    index,
    state,
  }),
)();
