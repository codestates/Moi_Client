import { createAction } from 'typesafe-actions';

export const SAVE_RESUME_FIELD_REQUEST = 'SAVE_RESUME_FIELD_REQUEST';
export const SAVE_RESUME_FIELD_SUCCESS = 'SAVE_RESUME_FIELD_SUCCESS';
export const SAVE_RESUME_FIELD_FAILURE = 'FACEBOOK_LOGIN_FAILURE';

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
