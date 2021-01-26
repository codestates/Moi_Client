import { createAction } from 'typesafe-actions';

export const START_LOADING = `START_LOADING`;
export const FINISH_LOADING = `FINISH_LOADING`;

export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType,
)();

export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType,
)();
