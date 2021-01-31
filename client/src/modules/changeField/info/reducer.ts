import { createReducer } from 'typesafe-actions';
import { Actions, InfoState } from './types';
import { INFO_CHANGE_FIELD, LOAD_INFO_FIELD, INIT_INFO_FIELD } from './actions';

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

    if (key === 'title') {
      return {
        ...state,
        info: {
          ...state.info,
          [key]: action.payload.value,
        },
      };
    } else if (key === 'email') {
      return {
        ...state,
        emailMsg: '',
        info: {
          ...state.info,
          contact: {
            ...state.info.contact,
            [key]: action.payload.value,
          },
        },
      };
    } else if (key === 'email') {
      return {
        ...state,
        emailMsg: '이메일을 입력하지 않았거나 형식이 알맞지 않습니다.',
        info: {
          ...state.info,
          contact: {
            ...state.info.contact,
            [key]: action.payload.value,
          },
        },
      };
    }
    if (key === 'username') {
      return {
        ...state,
        usernameMsg: '',
        info: {
          ...state.info,
          [key]: action.payload.value,
        },
      };
    } else if (key === 'username') {
      return {
        ...state,
        usernameMsg: '이름은 한글 또는 영문 3글자이상 입력해야 합니다',
        info: {
          ...state.info,
          [key]: action.payload.value,
        },
      };
    }
    if (key === 'phone') {
      return {
        ...state,
        phoneMsg: '',
        info: {
          ...state.info,
          contact: {
            ...state.info.contact,
            [key]: action.payload.value,
          },
        },
      };
    } else if (key === 'phone') {
      return {
        ...state,
        phoneMsg: 'xxx-xxxx-xxxx형식에 맞춰서 입력해주세요',
        info: {
          ...state.info,
          contact: {
            ...state.info.contact,
            [key]: action.payload.value,
          },
        },
      };
    }
    if (key === 'address') {
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
    }
    if (key === 'avatar' || key === 'profile') {
      return {
        ...state,
        info: {
          ...state.info,
          [key]: action.payload.value,
        },
      };
    } else if (key === 'email') {
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
  [INIT_INFO_FIELD]: (state) => {
    return {
      ...state,
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
  },
});

export default infoField;
