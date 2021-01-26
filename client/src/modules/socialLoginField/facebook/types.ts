import { ActionType } from 'typesafe-actions';
import {
  facebookLoginRequest,
  facebookLoginSuccess,
  facebookLoginFailure,
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
  facebookLoginRequest,
  facebookLoginSuccess,
  facebookLoginFailure,
};
export type Actions = ActionType<typeof actions>;
