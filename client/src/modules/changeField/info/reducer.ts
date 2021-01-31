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
  emailMsg: '이메일을 입력하지 않았거나 형식이 알맞지 않습니다.',
  usernameMsg: '이름은 필수입력값 입니다',
  phoneMsg: 'xxx-xxxx-xxxx형식에 맞춰서 입력해주세요',
  addressMsg: '주소는 필수입력값 입니다',
};

const infoField = createReducer<InfoState, Actions>(initialState, {
  [INFO_CHANGE_FIELD]: (state, action) => {
    const key = action.payload.key;
    const emailReg = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const usernameReg = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|\*]{3,20}$/;
    const phoneReg = /^\d{2,3}-\d{3,4}-\d{4}$/;
    const addressReg = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9}|\*]{1,50}$/;
    if (key === 'title') {
      return {
        ...state,
        info: {
          ...state.info,
          [key]: action.payload.value,
        },
      };
    } else if (key === 'email' && emailReg.test(action.payload.value)) {
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
    } else if (key === 'email' && !emailReg.test(action.payload.value)) {
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
    if (key === 'username' && usernameReg.test(action.payload.value)) {
      return {
        ...state,
        usernameMsg: '',
        info: {
          ...state.info,
          [key]: action.payload.value,
        },
      };
    } else if (key === 'username' && !usernameReg.test(action.payload.value)) {
      return {
        ...state,
        usernameMsg: '이름은 한글 또는 영문 3글자이상 입력해야 합니다',
        info: {
          ...state.info,
          [key]: action.payload.value,
        },
      };
    }
    if (key === 'phone' && phoneReg.test(action.payload.value)) {
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
    } else if (key === 'phone' && !phoneReg.test(action.payload.value)) {
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
    if (key === 'address' && addressReg.test(action.payload.value)) {
      return {
        ...state,
        addressMsg: '',
        info: {
          ...state.info,
          contact: {
            ...state.info.contact,
            [key]: action.payload.value,
          },
        },
      };
    } else if (key === 'address' && !addressReg.test(action.payload.value)) {
      return {
        ...state,
        addressMsg: '주소는 필수입력값 입니다',
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
