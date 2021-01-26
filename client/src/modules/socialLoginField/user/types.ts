import { ActionType } from 'typesafe-actions';
import { checkUser } from './actions';

export interface State {
  isLoggedIn: boolean;
  message: string | null;
}

const actions = {
  checkUser,
};
export type Actions = ActionType<typeof actions>;
