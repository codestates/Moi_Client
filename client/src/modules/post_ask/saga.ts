import { takeEvery, call, put } from 'redux-saga/effects';
import { postAskAsync } from '../../api/ask';
import { Actions } from '../../modules/post_ask/types';

function* fetch(actions: Actions) {
  try {
    const req = yield call(postAskAsync, actions.payload);
    yield put({
      type: 'POST_ASK_SUCCESS',
      payload: { isMailSucssessed: req.isMailSucssessed },
    });
  } catch (e) {
    yield put({
      type: 'POST_ASK_FAILURE',
      payload: { message: e.message },
    });
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* askSaga() {
  yield takeEvery('POST_ASK_REQUEST', fetch);
}
