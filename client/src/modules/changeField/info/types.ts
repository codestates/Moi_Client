import { ActionType } from 'typesafe-actions';
import { changeField } from './actions';

// ? ======================
// ?   CONST ACTION & STATE_TYPE
// ? ======================

export interface State {
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
}
export type Actions = ActionType<typeof changeField>;
