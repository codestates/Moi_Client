import { ActionType } from 'typesafe-actions';
import {
  changeEducationField,
  addEducationField,
  deleteEducationField,
  loadEducationField,
  toggleEduDropdown,
  initEducationField,
} from './actions';

export interface EducationItem {
  dropDownToggle: boolean;
  eduTitle: string;
  eduDesc: string;
  start: string;
  end: string;
}

export interface EduState {
  educations: EducationItem[];
}

const actions = {
  changeEducationField,
  addEducationField,
  deleteEducationField,
  loadEducationField,
  toggleEduDropdown,
  initEducationField,
};
export type Actions = ActionType<typeof actions>;
