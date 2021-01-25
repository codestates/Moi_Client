import { call, put, takeLatest } from 'redux-saga/effects';
import { github } from '../../../api/socialLogin';
import { Actions } from './types';

function* fetch(action: Actions) {
  try {
    const githubLogin = yield call(github, action.payload);
    yield put({
      type: 'GITHUB_LOGIN_SUCCESS',
      payload: { currentUser: githubLogin.currentUser },
    });
  } catch (err) {
    yield put({
      type: 'GITHUB_LOGIN_FAILURE',
      payload: { message: err.message },
    });
  }
}
export function* githubLoginSaga() {
  yield takeLatest('GITHUB_LOGIN_REQUEST', fetch);
}
