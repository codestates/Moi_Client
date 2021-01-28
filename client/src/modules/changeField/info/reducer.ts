import { createReducer } from 'typesafe-actions';
import { Actions, InfoState } from './types';
import { INFO_CHANGE_FIELD, LOAD_INFO_FIELD } from './actions';

const initialState: InfoState = {
  info: {
    username: '',
    avatar: '',
    profile: '',
    title: '',
    contact: {
      address: '',
      phone: '',
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

const infoField = createReducer<InfoState, Actions>(initialState, {
  [INFO_CHANGE_FIELD]: (state, action) => {
    const key = action.payload.key;

    if (
      key === 'username' ||
      key === 'avatar' ||
      key === 'profile' ||
      key === 'title'
    ) {
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
            [key]: action.payload.value,
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
  [LOAD_INFO_FIELD]: (state, action) => {
    const loadData = action.payload.state;
    return { ...state, ['info']: loadData };
  },
});

export default infoField;
