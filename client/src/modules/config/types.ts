import { ActionType } from 'typesafe-actions';
import { selectTemplate, onLoginModal } from './actions';

// ? ======================
// ?   CONST ACTION & STATE_TYPE
// ? ======================

export interface ConfigState {
  resume: {
    template: number;
  };
  modal: {
    loginModal: boolean;
  };
}

const action = { selectTemplate, onLoginModal };

export type Actions = ActionType<typeof action>;
