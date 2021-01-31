import { ActionType } from 'typesafe-actions';
import { askPostRequest, askPostSuccess, askPostFailure } from './actions';
export interface State {
  isMailSucssessed: boolean | null;
  message: string;
}
const actions = {
  askPostRequest,
  askPostSuccess,
  askPostFailure,
};
export type Actions = ActionType<typeof actions>;
