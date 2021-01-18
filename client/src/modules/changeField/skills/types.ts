import { ActionType } from 'typesafe-actions';
import { changeSkillField, addSkillField } from './actions';

// ? ======================
// ?   CONST ACTION & STATE_TYPE
// ? ======================
export interface SkillItem {
  skill: string;
  desc: string;
}
export interface State {
  skills: SkillItem[];
}
const actions = { changeSkillField, addSkillField };
export type Actions = ActionType<typeof actions>;
