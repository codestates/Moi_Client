import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

//* IMPORT_REDUCERS
import config from './config/reducer';
import infoField from './changeField/info/reducer';
import skillsField from './changeField/skills/reducer';
import workExperienceField from './changeField/workExperience/reducer';
import educationsField from './changeField/education/reducers';
import aeasField from './changeField/aea/reducers';
const rootReducer = combineReducers({
  config,
  infoField,
  skillsField,
  workExperienceField,
  educationsField,
  aeasField,
});

export function* rootSaga(): Generator {
  yield all([]);
}
export type RootStore = ReturnType<typeof rootReducer>;
export default rootReducer;
