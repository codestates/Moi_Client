import { createAction } from 'typesafe-actions';

// ?   CONST ACTION_TYPE
export const INFO_CHANGE_FIELD = 'changeFiled/INFO_CHANGE_FIELD';

// ?   CREATE_ACTION_FUNTIONS
export const changeField = createAction(
  INFO_CHANGE_FIELD,
  ({ key, value }) => ({
    key,
    value,
  }),
)();
