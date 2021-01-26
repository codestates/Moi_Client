import { ActionType } from 'typesafe-actions';
import {
  githubLoginRequest,
  githubLoginSuccess,
  githubLoginFailure,
} from './actions';

export interface UserInfo {
  id: string | null;
  email: string | null;
}

export interface State {
  currentUser: UserInfo;
  message: string | null;
}

const actions = {
  githubLoginRequest,
  githubLoginSuccess,
  githubLoginFailure,
};
export type Actions = ActionType<typeof actions>;
