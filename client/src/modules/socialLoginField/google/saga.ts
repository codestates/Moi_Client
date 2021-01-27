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
    localStorage.setItem(
      'current_user',
      JSON.stringify(googleLogin.currentUser),
    );
  } catch (err) {
    yield put({
      type: 'GOOGLE_LOGIN_FAILURE',
      payload: { message: err.message },
    });
  }
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* googleLoginSaga() {
  yield takeLatest('GOOGLE_LOGIN_REQUEST', fetch);
}
