import { createReducer } from 'typesafe-actions';
import { Actions, State } from './types';
import { INFO_CHANGE_FIELD } from './actions';

const initialState: State = {
  info: {
    username: '',
    avatar: '',
    profile: '',
    contact: {
      address: '',
      phone: 0,
      email: '',
      link: {
        facebook: '',
        twitter: '',
        blog: '',
        github: '',
        youtube: '',
        instagram: '',
      },
    },
  },
};

const infoField = createReducer<State, Actions>(initialState, {
  [INFO_CHANGE_FIELD]: (state, action) => {
    const key = action.payload.key;

    if (key === 'username' || key === 'avatar' || key === 'profile') {
      return {
        ...state,
        info: {
          ...state.info,
          [key]: action.payload.value,
        },
      };
    } else if (key === 'address' || key === 'phone' || key === 'email') {
      return {
        ...state,
        info: {
          ...state.info,
          contact: {
            ...state.info.contact,
            address: action.payload.value,
          },
        },
      };
    } else if (
      key === 'facebook' ||
      key === 'blog' ||
      key === 'github' ||
      key === 'youtube'
    ) {
      return {
        ...state,
        info: {
          ...state.info,
          contact: {
            ...state.info.contact,
            link: {
              ...state.info.contact.link,
              [key]: action.payload.value,
            },
          },
        },
      };
    } else {
      return {
        ...state,
        info: {
          ...state.info,
          unknownForm: action.payload.value,
        },
      };
    }
  },
});

export default infoField;
