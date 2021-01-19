import { ActionType } from 'typesafe-actions';
import {
  changeSkillField,
  addExperienceField,
  deleteSkillField,
  addWorkField,
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
  positionName: string;
  desc: DescItem[];
}
export interface State {
  workExperience: ExperienceItem[];
}
const actions = {
  changeSkillField,
  addExperienceField,
  deleteSkillField,
  addWorkField,
};
export type Actions = ActionType<typeof actions>;
