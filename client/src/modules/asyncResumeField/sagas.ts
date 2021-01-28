import { takeLatest, call, put } from 'redux-saga/effects';
import { saveResumeAsync } from '../../api/saveResume';
import { Actions } from '../../modules/post_ask/types';

function* fetch(actions: Actions) {
  try {
    const req = yield call(saveResumeAsync, actions.payload);
    yield put({
      type: 'SAVE_RESUME_FIELD_SUCCESS',
      payload: { save: req.save },
    });
  } catch (e) {
    yield put({
      type: 'SAVE_RESUME_FIELD_FAILURE',
      payload: { message: e.message },
    });
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* saveResumeSaga() {
  yield takeLatest('SAVE_RESUME_FIELD_REQUEST', fetch);
}
