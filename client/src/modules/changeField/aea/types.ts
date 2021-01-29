import { ActionType } from 'typesafe-actions';
import {
  changeAeaField,
  addAeaField,
  deleteAeaField,
  loadAeaField,
  toggleEduDropdown,
  initAeaField,
} from './actions';

export interface AeaItem {
  aeaTitle: string;
  aeaDesc: string;
  aeaDate: string;
  dropDownToggle: boolean;
}

export interface AeaState {
  aeas: AeaItem[];
}

const actions = {
  changeAeaField,
  addAeaField,
  deleteAeaField,
  loadAeaField,
  toggleEduDropdown,
  initAeaField,
};
export type Actions = ActionType<typeof actions>;
