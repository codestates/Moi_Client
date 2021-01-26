import { call, put, takeLatest } from 'redux-saga/effects';
import { Actions } from './types';
import { check } from '../../../api/socialLogin';

function* checkSaga() {
  try {
    const checkUser = yield call(check);
    yield put({
      type: 'CHECK_USER_SUCCESS',
      payload: { isLoggedIn: checkUser.isLoggedIn },
    });
  } catch (e) {
    yield put({
      type: 'CHECK_USER_FAILURE',
      payload: { message: e.message },
    });
  }
}

function checkFailureSaga() {
  try {
    localStorage.removeItem('current_user');
  } catch (e) {
    throw e;
  }
}

export function* userSaga() {
  yield takeLatest('CHECK_USER_REQUEST', checkSaga);
  yield takeLatest('CHECK_USER_FAILURE', checkFailureSaga);
}
