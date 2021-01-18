import { ActionType } from 'typesafe-actions';
import { changeField } from './actions';

// ? ======================
// ?   CONST ACTION & STATE_TYPE
// ? ======================

export interface State {
  resume: {
    template: 0;
  };
}
export type Actions = ActionType<typeof changeField>;
