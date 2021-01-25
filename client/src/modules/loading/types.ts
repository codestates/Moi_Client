import { ActionType } from 'typesafe-actions';
import { startLoading, finishLoading } from './actions';

export interface State {}

const actions = {
  startLoading,
  finishLoading,
};
export type Actions = ActionType<typeof actions>;
