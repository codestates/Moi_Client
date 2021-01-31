import { ActionType } from 'typesafe-actions';
import { changeField, loadInfoField } from './actions';

// ? ======================
// ?   CONST ACTION & STATE_TYPE
// ? ======================

export interface InfoState {
  info: {
    username: string;
    avatar: string;
    profile: string;
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
  addressMsg: string;
}
const actions = { changeField, loadInfoField };
export type Actions = ActionType<typeof actions>;
