/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { takeLatest, call, put } from 'redux-saga/effects';
import {
  saveResumeAsync,
  editResumeAsync,
  updateResumeAsync,
} from '../../api/asyncResume';
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

function* fetchUpdate(actions: Actions) {
  try {
    const req = yield call(updateResumeAsync, actions.payload);
    yield put({
      type: 'UPDATE_RESUME_FIELD_SUCCESS',
      payload: { newResume: req.newResume, isEdited: req.isEdited },
    });
  } catch (e) {
    yield put({
      type: 'UPDATE_RESUME_FIELD_FAILURE',
      payload: { isEdited: e.message },
    });
  }
}

export function* saveResumeSaga() {
  yield takeLatest('SAVE_RESUME_FIELD_REQUEST', fetchSave);
}

export function* editResumeSaga() {
  yield takeLatest('EDIT_RESUME_FIELD_REQUEST', fetchEdit);
}

export function* updateResumeSaga() {
  yield takeLatest('UPDATE_RESUME_FIELD_REQUEST', fetchUpdate);
}
