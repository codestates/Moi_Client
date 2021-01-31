import { ActionType } from 'typesafe-actions';
import {
  selectTemplate,
  onLoginModal,
  onUploadModal,
  onDeleteModal,
} from './actions';

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
    deleteModal: {
      modal: boolean;
      resumeId: string;
      title: null | string;
    };
  };
}

const action = { selectTemplate, onLoginModal, onUploadModal, onDeleteModal };

export type Actions = ActionType<typeof action>;
