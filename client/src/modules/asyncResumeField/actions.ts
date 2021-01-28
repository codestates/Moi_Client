import { createAction } from 'typesafe-actions';

export const SAVE_RESUME_FIELD_REQUEST = 'SAVE_RESUME_FIELD_REQUEST';
export const SAVE_RESUME_FIELD_SUCCESS = 'SAVE_RESUME_FIELD_SUCCESS';
export const SAVE_RESUME_FIELD_FAILURE = 'SAVE_RESUME_FIELD_FAILURE';

export const EDIT_RESUME_FIELD_REQUEST = 'EDIT_RESUME_FIELD_REQUEST';
export const EDIT_RESUME_FIELD_SUCCESS = 'EDIT_RESUME_FIELD_SUCCESS';
export const EDIT_RESUME_FIELD_FAILURE = 'EDIT_RESUME_FIELD_FAILURE';

export const saveResumeFieldRequest = createAction(
  SAVE_RESUME_FIELD_REQUEST,
  ({ values }) => ({
    values,
  }),
)();

export const saveResumeFieldSuccess = createAction(
  SAVE_RESUME_FIELD_SUCCESS,
  ({ result }) => ({
    save: result,
  }),
)();

export const saveResumeFieldFailure = createAction(
  SAVE_RESUME_FIELD_FAILURE,
  ({ result }) => ({
    message: result,
  }),
)();

//* EDIT_RESUME_FIELD_SAGA_ACTIONS
export const editResumeFieldRequest = createAction(
  EDIT_RESUME_FIELD_REQUEST,
  ({ resumeId }) => ({
    resumeId,
  }),
)();

export const editResumeFieldSuccess = createAction(
  EDIT_RESUME_FIELD_SUCCESS,
  ({ result }) => ({
    resume: result,
  }),
)();

export const editResumeFieldFailure = createAction(
  EDIT_RESUME_FIELD_FAILURE,
  ({ result }) => ({
    message: result,
  }),
)();
