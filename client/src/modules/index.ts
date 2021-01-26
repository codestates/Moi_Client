import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

//* IMPORT_REDUCERS
import config from './config/reducer';
import infoField from './changeField/info/reducer';
import skillsField from './changeField/skills/reducer';
import workExperienceField from './changeField/workExperience/reducer';
import educationsField from './changeField/education/reducers';
import aeasField from './changeField/aea/reducers';
import googleLoginField from './socialLoginField/google/reducer';
import facebookLoginField from './socialLoginField/facebook/reducer';
import githubLoginField from './socialLoginField/github/reducer';
import { googleLoginSaga } from './socialLoginField/google/saga';
import { facebookLoginSaga } from './socialLoginField/facebook/saga';
import { githubLoginSaga } from './socialLoginField/github/saga';

const rootReducer = combineReducers({
  config,
  infoField,
  skillsField,
  workExperienceField,
  educationsField,
  aeasField,
  googleLoginField,
  facebookLoginField,
  githubLoginField,
});

export function* rootSaga(): Generator {
  yield all([googleLoginSaga(), facebookLoginSaga(), githubLoginSaga()]);
}
export type RootStore = ReturnType<typeof rootReducer>;
export default rootReducer;
