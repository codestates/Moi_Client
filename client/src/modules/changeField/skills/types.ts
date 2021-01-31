import { ActionType } from 'typesafe-actions';
import {
  changeSkillField,
  addSkillField,
  deleteSkillField,
  loadSkillsField,
  initSkillsField,
} from './actions';

// ? ======================
// ?   CONST ACTION & STATE_TYPE
// ? ======================
export interface SkillItem {
  skill: string;
  desc: string;
}
export interface SkillsState {
  skills: SkillItem[];
}
const actions = {
  changeSkillField,
  addSkillField,
  deleteSkillField,
  loadSkillsField,
  initSkillsField,
};
export type Actions = ActionType<typeof actions>;
