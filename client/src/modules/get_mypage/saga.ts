import { takeEvery, call, put } from 'redux-saga/effects';
import { getMypageAsync } from '../../api/mypage';

function* fetch() {
  try {
    const req = yield call(getMypageAsync);
    yield put({
      type: 'GET_MYPAGE_SUCCESS',
      payload: {
        list: req.list,
        isGetList: req.isGetList,
      },
    });
  } catch (e) {
    yield put({
      type: 'GET_MYPAGE_FAILURE',
      payload: { message: e.message },
    });
  }
}

export function* mypageSaga() {
  yield takeEvery('GET_MYPAGE_REQUEST', fetch);
}
