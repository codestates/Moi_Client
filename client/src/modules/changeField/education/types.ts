import { ActionType } from 'typesafe-actions';
import {
  changeEducationField,
  addEducationField,
  deleteEducationField,
} from './actions';

export interface EducationItem {
  eduTitle: string;
  eduDesc: string;
}

export interface State {
  educations: EducationItem[];
}

const actions = {
  changeEducationField,
  addEducationField,
  deleteEducationField,
};
export type Actions = ActionType<typeof actions>;
