import { ActionType } from 'typesafe-actions';
import {
  googleLoginRequest,
  googleLoginSuccess,
  googleLoginFailure,
} from './actions';

export interface UserInfo {
  id: string | null;
  email: string | null;
  thumbnail: string | null;
}

export interface State {
  currentUser: UserInfo;
  message: string | null;
}

const actions = {
  googleLoginRequest,
  googleLoginSuccess,
  googleLoginFailure,
};
export type Actions = ActionType<typeof actions>;
