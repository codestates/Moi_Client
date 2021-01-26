import { ActionType } from 'typesafe-actions';
import { checkUser, logoutUser } from './actions';

export interface CheckState {
  isLoggedIn: boolean;
  message: string | null;
}

const actions = {
  checkUser,
  logoutUser,
};
export type Actions = ActionType<typeof actions>;
