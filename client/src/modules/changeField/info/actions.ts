import { createAction } from 'typesafe-actions';

// ?   CONST ACTION_TYPE
export const INFO_CHANGE_FIELD = 'changeFiled/INFO_CHANGE_FIELD';
export const LOAD_INFO_FIELD = 'changeFiled/LOAD_INFO_FIELD';
export const INIT_INFO_FIELD = 'changeFiled/INIT_INFO_FIELD';

// ?   CREATE_ACTION_FUNTIONS
export const changeField = createAction(
  INFO_CHANGE_FIELD,
  ({ key, value }) => ({
    key,
    value,
  }),
)();

export const loadInfoField = createAction(LOAD_INFO_FIELD, ({ state }) => ({
  state,
}))();

export const initInfoField = createAction(INIT_INFO_FIELD, ({}) => ({}))();
