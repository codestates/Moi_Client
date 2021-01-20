import { ActionType } from 'typesafe-actions';
import { changeAeaField, addAeaField, deleteAeaField } from './actions';

export interface AeaItem {
  aeaTitle: string;
  aeaDesc: string;
}

export interface State {
  aeas: AeaItem[];
}

const actions = {
  changeAeaField,
  addAeaField,
  deleteAeaField,
};
export type Actions = ActionType<typeof actions>;
