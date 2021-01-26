import { ActionType } from 'typesafe-actions';
import { changeAskField } from './actions';

// ? ======================
// ?   CONST ACTION & STATE_TYPE
// ? ======================

export interface State {
  ask: { username: string; email: string; title: string; desc: string };
}

export type Actions = ActionType<typeof changeAskField>;
