import { createAction } from 'typesafe-actions';

//? ACTION_TYPES
export const POST_ASK_REQUEST = 'POST_ASK_REQUEST';
export const POST_ASK_SUCCESS = 'POST_ASK_SUCCESS';
export const POST_ASK_FAILURE = 'POST_ASK_FAILURE';

export const askPostRequest = createAction(
  POST_ASK_REQUEST,
  ({ username, email, title, desc }) => ({ username, email, title, desc }),
)();

export const askPostSuccess = createAction(
  POST_ASK_SUCCESS,
  ({ isMailSucssessed }) => ({
    isMailSucssessed,
  }),
)();

export const askPostFailure = createAction(POST_ASK_FAILURE, ({ message }) => ({
  message,
}))();

//? CREATE_ACTION
// export const askRequest = createAsyncAction(
//   POST_ASK_REQUEST,
//   POST_ASK_SUCCESS,
//   POST_ASK_FAILURE,
// )<Request, Success, Failure>();
