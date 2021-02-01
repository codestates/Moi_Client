import { createReducer } from 'typesafe-actions';
import { Actions, CertificateState } from './types';
import {
  CERTIFICATE_CHANGE_FIELD,
  ADD_CERTIFICATE_FIELD,
  DELETE_CERTIFICATE_FIELD,
  LOAD_CERTIFICATE_FIELD,
  TOGGLE_CERTIFICATE_DROPDOWN,
  INIT_CERTIFICATE_FIELD,
} from './actions';

const initialState: CertificateState = {
  certificates: [],
};

const certificateField = createReducer<CertificateState, Actions>(
  initialState,
  {
    [ADD_CERTIFICATE_FIELD]: (state) => {
      const newCertificate = {
        certificateTitle: '',
        certificateDesc: '',
        certificateDate: '',
        dropDownToggle: false,
      };
      return {
        ...state,
        certificates: [...state.certificates, newCertificate],
      };
    },
    [CERTIFICATE_CHANGE_FIELD]: (state, action) => {
      const index = action.payload.index;
      const newCertificate = [...state.certificates];

      if (action.payload.key === 'certificationTitle') {
        newCertificate[index].certificateTitle = action.payload.value;
      } else if (action.payload.key === 'certificationDesc') {
        newCertificate[index].certificateDesc = action.payload.value;
      } else if (action.payload.key === 'certificationDate') {
        newCertificate[index].certificateDate = action.payload.value;
      }

      return {
        ...state,
        certificates: newCertificate,
      };
    },
    [DELETE_CERTIFICATE_FIELD]: (state, action) => {
      const index = action.payload.index;
      const newCertificate = [
        ...state.certificates.filter((_, idx) => {
          return index !== idx;
        }),
      ];

      return {
        ...state,
        certificates: newCertificate,
      };
    },
    [LOAD_CERTIFICATE_FIELD]: (state, action) => {
      const loadData = action.payload.state;
      return { ...state, ['certificates']: loadData };
    },
    [TOGGLE_CERTIFICATE_DROPDOWN]: (state, action) => {
      const index = action.payload.index;
      const newCertificate = [...state.certificates];
      newCertificate[index].dropDownToggle = !newCertificate[index]
        .dropDownToggle;
      return {
        ...state,
        ['certificates']: newCertificate,
      };
    },
    [INIT_CERTIFICATE_FIELD]: (state) => {
      return {
        ...state,
        certificates: [],
      };
    },
  },
);

export default certificateField;
