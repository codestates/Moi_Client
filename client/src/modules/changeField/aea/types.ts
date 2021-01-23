import { ActionType } from 'typesafe-actions';
import {
  changeAeaField,
  addAeaField,
  deleteAeaField,
  toggleEduDropdown,
} from './actions';

export interface AeaItem {
  aeaTitle: string;
  aeaDesc: string;
  aeaDate: string;
  dropDownToggle: boolean;
}

export interface State {
  aeas: AeaItem[];
}

const actions = {
  changeAeaField,
  addAeaField,
  deleteAeaField,
  toggleEduDropdown,
};
export type Actions = ActionType<typeof actions>;
