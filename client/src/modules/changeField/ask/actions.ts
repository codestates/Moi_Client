import { createAction } from 'typesafe-actions';

// ?   CONST ACTION_TYPE
export const ASK_CHANGE_FIELD = 'changeFiled/ASK_CHANGE_FIELD';

// ?   CREATE_ACTION_FUNTIONS
export const changeAskField = createAction(
  ASK_CHANGE_FIELD,
  ({ key, value }) => ({
    key,
    value,
  }),
)();
