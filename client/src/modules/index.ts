import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

//* IMPORT_REDUCERS
import config from './config/reducer';
import infoField from './changeField/info/reducer';
import skillsField from './changeField/skills/reducer';
const rootReducer = combineReducers({
  config,
  infoField,
  skillsField,
});

export function* rootSaga(): Generator {
  yield all([]);
}
export type RootStore = ReturnType<typeof rootReducer>;
export default rootReducer;
