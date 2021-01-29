import { call, put, takeLatest } from 'redux-saga/effects';
import { kakao } from '../../../api/socialLogin';
import { Actions } from './types';

function* fetch(action: Actions) {
  try {
    const kakaoLogin = yield call(kakao, action.payload);
    yield put({
      type: 'KAKAO_LOGIN_SUCCESS',
      payload: { currentUser: kakaoLogin.currentUser },
    });
    localStorage.setItem(
      'current_user',
      JSON.stringify(kakaoLogin.currentUser),
    );
  } catch (err) {
    yield put({
      type: 'KAKAO_LOGIN_FAILURE',
      payload: { message: err.message },
    });
  }
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* kakaoLoginSaga() {
  yield takeLatest('KAKAO_LOGIN_REQUEST', fetch);
}
