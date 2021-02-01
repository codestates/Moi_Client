import { createAction } from 'typesafe-actions';

export const CERTIFICATE_CHANGE_FIELD =
  'certificateField/CERTIFICATE_CHANGE_FIELD';
export const ADD_CERTIFICATE_FIELD = 'certificateField/ADD_CERTIFICATE_FIELD';
export const DELETE_CERTIFICATE_FIELD =
  'certificateField/DELETE_CERTIFICATE_FIELD';
export const LOAD_CERTIFICATE_FIELD = 'certificateField/LOAD_CERTIFICATE_FIELD';
export const INIT_CERTIFICATE_FIELD = 'certificateField/INIT_CERTIFICATE_FIELD';
export const TOGGLE_CERTIFICATE_DROPDOWN =
  'certificateField/TOGGLE_CERTIFICATE_DROPDOWN';

export const changeCertificateField = createAction(
  CERTIFICATE_CHANGE_FIELD,
  ({ index, key, value }) => ({
    index,
    key,
    value,
  }),
)();

export const addCertificateField = createAction(
  ADD_CERTIFICATE_FIELD,
  () => ({}),
)();
export const deleteCertificateField = createAction(
  DELETE_CERTIFICATE_FIELD,
  ({ index }) => ({
    index,
  }),
)();
export const loadCertificateField = createAction(
  LOAD_CERTIFICATE_FIELD,
  ({ state }) => ({
    state,
  }),
)();
export const initCertificateField = createAction(
  INIT_CERTIFICATE_FIELD,
  ({}) => ({}),
)();
export const toggleCertificateDropdown = createAction(
  TOGGLE_CERTIFICATE_DROPDOWN,
  ({ index }) => ({
    index,
  }),
)();
