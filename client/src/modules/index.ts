import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { askSaga } from '../modules/post_ask/saga';
//* IMPORT_REDUCERS
import config from './config/reducer';
import infoField from './changeField/info/reducer';
import skillsField from './changeField/skills/reducer';
import workExperienceField from './changeField/workExperience/reducer';
import educationsField from './changeField/education/reducers';
import aeasField from './changeField/aea/reducers';
import askField from './changeField/ask/reducers';
import askRequestField from './post_ask/reducer';
import googleLoginField from './socialLoginField/google/reducer';
import facebookLoginField from './socialLoginField/facebook/reducer';
import githubLoginField from './socialLoginField/github/reducer';
import checkUserField from './socialLoginField/user/reducer';
import asyncResumeField from './asyncResumeField/reducers';

import { googleLoginSaga } from './socialLoginField/google/saga';
import { facebookLoginSaga } from './socialLoginField/facebook/saga';
import { githubLoginSaga } from './socialLoginField/github/saga';
import { userSaga } from './socialLoginField/user/saga';
import { saveResumeSaga } from './asyncResumeField/sagas';

const rootReducer = combineReducers({
  config,
  infoField,
  skillsField,
  workExperienceField,
  educationsField,
  aeasField,
  askField,
  askRequestField,
  googleLoginField,
  facebookLoginField,
  githubLoginField,
  checkUserField,
  asyncResumeField,
});

export function* rootSaga(): Generator {
  yield all([
    askSaga(),
    googleLoginSaga(),
    facebookLoginSaga(),
    githubLoginSaga(),
    userSaga(),
    saveResumeSaga(),
  ]);
}

export type RootStore = ReturnType<typeof rootReducer>;
export default rootReducer;
