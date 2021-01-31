import { ActionType } from 'typesafe-actions';
import { checkUser, logoutUser, withdrawalUser } from './actions';

export interface CheckState {
  isLoggedIn: boolean;
  message: string | null;
  logout: boolean;
}

const actions = {
  checkUser,
  logoutUser,
  withdrawalUser,
};
export type Actions = ActionType<typeof actions>;
