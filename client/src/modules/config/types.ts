import { ActionType } from 'typesafe-actions';
import { selectTemplate } from './actions';

// ? ======================
// ?   CONST ACTION & STATE_TYPE
// ? ======================

export interface ConfigState {
  resume: {
    template: 0;
  };
}

export type Actions = ActionType<typeof selectTemplate>;
