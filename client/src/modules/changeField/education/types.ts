import { ActionType } from 'typesafe-actions';
import {
  changeEducationField,
  addEducationField,
  deleteEducationField,
  toggleEduDropdown,
} from './actions';

export interface EducationItem {
  dropDownToggle: boolean;
  eduTitle: string;
  eduDesc: string;
  start: string;
  end: string;
}

export interface State {
  educations: EducationItem[];
}

const actions = {
  changeEducationField,
  addEducationField,
  deleteEducationField,
  toggleEduDropdown,
};
export type Actions = ActionType<typeof actions>;
