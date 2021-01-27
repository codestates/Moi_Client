import { ActionType } from 'typesafe-actions';
import {
  saveResumeFieldRequest,
  saveResumeFieldSuccess,
  saveResumeFieldFailure,
} from './actions';

export interface State {
  saveResume: {
    save: boolean | null;
    message: null | string;
  };
}

const actions = {
  saveResumeFieldRequest,
  saveResumeFieldSuccess,
  saveResumeFieldFailure,
};
export type Actions = ActionType<typeof actions>;
