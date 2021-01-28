import { ActionType } from 'typesafe-actions';
import {
  mypageGetRequest,
  mypageGetSuccess,
  mypageGetFailure,
} from './actions';

export interface ResumeData {
  resumeId: string;
  title: string;
  createdAt: string;
  template: string;
}

export interface State {
  list: ResumeData[];
  message: string;
  isGetList: boolean | null;
}

const actions = {
  mypageGetRequest,
  mypageGetSuccess,
  mypageGetFailure,
};
export type Actions = ActionType<typeof actions>;
