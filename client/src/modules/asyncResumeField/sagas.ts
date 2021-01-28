import { takeLatest, call, put } from 'redux-saga/effects';
import { saveResumeAsync, editResumeAsync } from '../../api/asyncResume';
import { Actions } from '../../modules/asyncResumeField/types';

function* fetchSave(actions: Actions) {
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

function* fetchEdit(actions: Actions) {
  try {
    const req = yield call(editResumeAsync, actions.payload);
    yield put({
      type: 'EDIT_RESUME_FIELD_SUCCESS',
      payload: { resume: req },
    });
  } catch (e) {
    yield put({
      type: 'EDIT_RESUME_FIELD_FAILURE',
      payload: { message: e.message },
    });
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* saveResumeSaga() {
  yield takeLatest('SAVE_RESUME_FIELD_REQUEST', fetchSave);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* editResumeSaga() {
  yield takeLatest('EDIT_RESUME_FIELD_REQUEST', fetchEdit);
}
