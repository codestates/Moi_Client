import { ActionType } from 'typesafe-actions';
import { changeField, loadInfoField, initInfoField } from './actions';

// ? ======================
// ?   CONST ACTION & STATE_TYPE
// ? ======================

export interface InfoState {
  info: {
    username: string;
    avatar: string;
    profile: string;
    title: string;
    contact: {
      address: string;
      phone: string;
      email: string;
      link: {
        facebook: string;
        twitter: string;
        blog: string;
        github: string;
        youtube: string;
        instagram: string;
      };
    };
  };
  emailMsg: string;
  usernameMsg: string;
  phoneMsg: string;
}
const actions = { changeField, loadInfoField, initInfoField };
export type Actions = ActionType<typeof actions>;
