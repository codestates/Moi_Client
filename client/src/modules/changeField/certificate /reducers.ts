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
      return {
        ...state,
        certificates: [
          ...state.certificates,
          {
            certificationTitle: '',
            certificationDesc: '',
            certificationDate: '',
            dropDownToggle: false,
          },
        ],
      };
    },
    [CERTIFICATE_CHANGE_FIELD]: (state, action) => {
      const index = action.payload.index;
      const newCertificate = [...state.certificates];

      if (action.payload.key === 'certificationTitle') {
        newCertificate[index].certificationTitle = action.payload.value;
      } else if (action.payload.key === 'certificationDesc') {
        newCertificate[index].certificationDesc = action.payload.value;
      } else if (action.payload.key === 'certificationDate') {
        newCertificate[index].certificationDate = action.payload.value;
      }

      return {
        ...state,
        certificates: newCertificate,
      };
    },
    [DELETE_CERTIFICATE_FIELD]: (state, action) => {
      const index = action.payload.index;
      const newCertificate = [
        ...state.certificates.filter((ele, idx) => {
          return index !== idx;
        }),
      ];

      return {
        ...state,
        newCertificates: newCertificate,
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
