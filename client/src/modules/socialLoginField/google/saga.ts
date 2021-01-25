import { call, put, takeLatest } from 'redux-saga/effects';
import { google } from '../../../api/socialLogin';
import { Actions } from './types';

function* fetch(action: Actions) {
  try {
    const googleLogin = yield call(google, action.payload);
    yield put({
      type: 'GOOGLE_LOGIN_SUCCESS',
      payload: { currentUser: googleLogin.currentUser },
    });
  } catch (err) {
    yield put({
      type: 'GOOGLE_LOGIN_FAILURE',
      payload: { message: err.message },
    });
  }
}
export function* googleLoginSaga() {
  yield takeLatest('GOOGLE_LOGIN_REQUEST', fetch);
}
