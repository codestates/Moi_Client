import { createAction } from 'typesafe-actions';

// ?   CONST ACTION_TYPE
export const SELECT_TEMPLATE = 'config/SELECT_TEMPLATE';

export const ON_LOGIN_MODAL = 'config/ON_LOGIN_MODAL';

// ?   CREATE_ACTION_FUNTIONS
export const selectTemplate = createAction(SELECT_TEMPLATE, ({ value }) => ({
  value,
}))();

export const onLoginModal = createAction(ON_LOGIN_MODAL, ({ state }) => ({
  state,
}))();
