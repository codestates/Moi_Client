import { call, put, takeLatest } from 'redux-saga/effects';
import { facebook } from '../../../api/socialLogin';
import { Actions } from './types';

function* fetch(action: Actions) {
  try {
    const facbookLogin = yield call(facebook, action.payload);
    yield put({
      type: 'FACEBOOK_LOGIN_SUCCESS',
      payload: { currentUser: facbookLogin.currentUser },
    });
    localStorage.setItem(
      'current_user',
      JSON.stringify(facbookLogin.currentUser),
    );
  } catch (err) {
    yield put({
      type: 'FACEBOOK_LOGIN_FAILURE',
      payload: { message: err.message },
    });
  }
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* facebookLoginSaga() {
  yield takeLatest('FACEBOOK_LOGIN_REQUEST', fetch);
}
