import { ActionType } from 'typesafe-actions';
import {
  changeExperienceField,
  addExperienceField,
  deleteExperienceField,
  addJobDescField,
  changeJobDescField,
  deleteJobDescField,
  checkInOffice,
} from './actions';

// ? ======================
// ?   CONST ACTION & STATE_TYPE
// ? ======================

export interface DescItem {
  description: string;
}

export interface ExperienceItem {
  companyName: string;
  start: string;
  end: string;
  inOffice: boolean;
  positionName: string;
  desc: DescItem[];
}
export interface State {
  workExperience: ExperienceItem[];
}
const actions = {
  changeExperienceField,
  addExperienceField,
  deleteExperienceField,
  addJobDescField,
  changeJobDescField,
  deleteJobDescField,
  checkInOffice,
};
export type Actions = ActionType<typeof actions>;
