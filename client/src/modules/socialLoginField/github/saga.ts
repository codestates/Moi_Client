import { call, put, takeLatest } from 'redux-saga/effects';
import { github } from '../../../api/socialLogin';
import { Actions } from './types';

function* fetch(action: Actions) {
  try {
    const githubLogin = yield call(github, action.payload);
    console.log(githubLogin.currentUser);
    yield put({
      type: 'GITHUB_LOGIN_SUCCESS',
      payload: { currentUser: githubLogin.currentUser },
    });
    localStorage.setItem(
      'current_user',
      JSON.stringify(githubLogin.currentUser),
    );
  } catch (err) {
    yield put({
      type: 'GITHUB_LOGIN_FAILURE',
      payload: { message: err.message },
    });
  }
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* githubLoginSaga() {
  yield takeLatest('GITHUB_LOGIN_REQUEST', fetch);
}
