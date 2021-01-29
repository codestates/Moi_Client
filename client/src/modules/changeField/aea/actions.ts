import { createAction } from 'typesafe-actions';

export const AEAS_CHANGE_FIELD = 'aeasField/EDUCATIONS_CHANGE_FIELD';
export const ADD_AEA_FIELD = 'aeasField/ADD_AEA_FIELD';
export const DELETE_AEA_FIELD = 'aeasField/DELETE_AEA_FIELD';
export const LOAD_AEA_FIELD = 'aeasField/LOAD_AEA_FIELD';
export const INIT_AEA_FIELD = 'aeasField/INIT_AEA_FIELD';
export const TOGGLE_AEA_DROPDOWN = 'aeasField/TOGGLE_AEA_DROPDOWN';

export const changeAeaField = createAction(
  AEAS_CHANGE_FIELD,
  ({ index, key, value }) => ({
    index,
    key,
    value,
  }),
)();

export const addAeaField = createAction(ADD_AEA_FIELD, () => ({}))();
export const deleteAeaField = createAction(DELETE_AEA_FIELD, ({ index }) => ({
  index,
}))();
export const loadAeaField = createAction(LOAD_AEA_FIELD, ({ state }) => ({
  state,
}))();
export const initAeaField = createAction(INIT_AEA_FIELD, ({}) => ({}))();
export const toggleEduDropdown = createAction(
  TOGGLE_AEA_DROPDOWN,
  ({ index }) => ({
    index,
  }),
)();
