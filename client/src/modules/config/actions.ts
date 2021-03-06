import { createAction } from 'typesafe-actions';

// ?   CONST ACTION_TYPE
export const SELECT_TEMPLATE = 'config/SELECT_TEMPLATE';

export const ON_LOGIN_MODAL = 'config/ON_LOGIN_MODAL';

export const ON_UPLOAD_MODAL = 'config/ON_UPLOAD_MODAL';

export const ON_DELETE_MODAL = 'config/ON_DELETE_MODAL';

// ?   CREATE_ACTION_FUNTIONS
export const selectTemplate = createAction(SELECT_TEMPLATE, ({ value }) => ({
  value,
}))();

export const onLoginModal = createAction(ON_LOGIN_MODAL, ({ state }) => ({
  state,
}))();

export const onUploadModal = createAction(ON_UPLOAD_MODAL, ({ state }) => ({
  state,
}))();

export const onDeleteModal = createAction(
  ON_DELETE_MODAL,
  ({ state, resumeId, title }) => ({
    state,
    resumeId,
    title,
  }),
)();
