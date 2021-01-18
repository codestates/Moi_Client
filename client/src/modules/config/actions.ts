import { createAction } from 'typesafe-actions';

// ?   CONST ACTION_TYPE
export const SELECT_TEMPLATE = 'config/SELECT_TEMPLATE';

// ?   CREATE_ACTION_FUNTIONS
export const changeField = createAction(SELECT_TEMPLATE, ({ key, value }) => ({
  key,
  value,
}))();
