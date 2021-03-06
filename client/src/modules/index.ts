import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { askSaga } from '../modules/post_ask/saga';

//* IMPORT_REDUCERS

//* ========================
//*   CONFIG
//* ========================
import config from './config/reducer';

//* ========================
//*   CHANGE_FIELD
//* ========================
import infoField from './changeField/info/reducer';
import skillsField from './changeField/skills/reducer';
import workExperienceField from './changeField/workExperience/reducer';
import educationsField from './changeField/education/reducers';
import aeasField from './changeField/aea/reducers';
import askField from './changeField/ask/reducers';
import certificateField from './changeField/certificate/reducers';

//* ========================
//*   ASK
//* ========================
import askRequestField from './post_ask/reducer';

//* ========================
//*   SOCIAL_LOGIN
//* ========================
import googleLoginField from './socialLoginField/google/reducer';
import kakaoLoginField from './socialLoginField/facebook/reducer';
import githubLoginField from './socialLoginField/github/reducer';
import checkUserField from './socialLoginField/user/reducer';

//* ========================
//*   MY_PAGE
//* ========================
import mypageRequestField from './get_mypage/reducer';
import asyncResumeField from './asyncResumeField/reducers';

//? ========================
//?   SAGAS
//? ========================
import { googleLoginSaga } from './socialLoginField/google/saga';
import { kakaoLoginSaga } from './socialLoginField/facebook/saga';
import { githubLoginSaga } from './socialLoginField/github/saga';
import { userSaga } from './socialLoginField/user/saga';
import { mypageSaga } from './get_mypage/saga';
import { requestResumeSaga } from './asyncResumeField/sagas';

const rootReducer = combineReducers({
  config,
  infoField,
  skillsField,
  workExperienceField,
  educationsField,
  aeasField,
  certificateField,
  askField,
  askRequestField,
  googleLoginField,
  kakaoLoginField,
  githubLoginField,
  checkUserField,
  mypageRequestField,
  asyncResumeField,
});

export function* rootSaga(): Generator {
  yield all([
    askSaga(),
    googleLoginSaga(),
    kakaoLoginSaga(),
    githubLoginSaga(),
    userSaga(),
    mypageSaga(),
    requestResumeSaga(),
  ]);
}

export type RootStore = ReturnType<typeof rootReducer>;
export default rootReducer;
