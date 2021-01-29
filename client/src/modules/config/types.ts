import { ActionType } from 'typesafe-actions';
import { selectTemplate, onLoginModal, onUploadModal } from './actions';

// ? ======================
// ?   CONST ACTION & STATE_TYPE
// ? ======================

export interface ConfigState {
  resume: {
    template: number;
  };
  modal: {
    loginModal: boolean;
    uploadModal: boolean;
  };
}

const action = { selectTemplate, onLoginModal, onUploadModal };

export type Actions = ActionType<typeof action>;
