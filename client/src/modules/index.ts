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
const rootReducer = combineReducers({
  config,
  infoField,
  skillsField,
  workExperienceField,
  educationsField,
  aeasField,
  askField,
  askRequestField,
});

export function* rootSaga(): Generator {
  yield all([askSaga()]);
}
export type RootStore = ReturnType<typeof rootReducer>;
export default rootReducer;
