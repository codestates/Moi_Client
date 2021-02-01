import { ActionType } from 'typesafe-actions';
import {
  changeCertificateField,
  addCertificateField,
  deleteCertificateField,
  loadCertificateField,
  toggleCertificateDropdown,
  initCertificateField,
} from './actions';

export interface CertificateItem {
  certificateTitle: string;
  certificateDesc: string;
  certificateDate: string;
  dropDownToggle: boolean;
}

export interface CertificateState {
  certificates: CertificateItem[];
}

const actions = {
  changeCertificateField,
  addCertificateField,
  deleteCertificateField,
  loadCertificateField,
  toggleCertificateDropdown,
  initCertificateField,
};
export type Actions = ActionType<typeof actions>;
