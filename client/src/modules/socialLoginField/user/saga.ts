import { call, put, takeLatest } from 'redux-saga/effects';
import { check, logout } from '../../../api/socialLogin';

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

function* logoutSaga() {
  try {
    yield call(logout);
    localStorage.removeItem('current_user');
  } catch (e) {
    throw Error(e);
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* userSaga() {
  yield takeLatest('CHECK_USER_REQUEST', checkSaga);
  yield takeLatest('CHECK_USER_FAILURE', checkFailureSaga);
  yield takeLatest('LOGOUT_USER_REQUEST', logoutSaga);
}
