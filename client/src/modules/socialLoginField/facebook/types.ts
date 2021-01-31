import { ActionType } from 'typesafe-actions';
import {
  kakaoLoginRequest,
  kakaoLoginSuccess,
  kakaoLoginFailure,
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
  kakaoLoginRequest,
  kakaoLoginSuccess,
  kakaoLoginFailure,
};
export type Actions = ActionType<typeof actions>;
