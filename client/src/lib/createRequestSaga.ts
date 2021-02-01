/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading/actions';
import { Actions } from '../modules/loading/types';

export const createRequestActionTypes = (type: string) => {
  const REQUEST = `${type}_REQUEST`;
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [REQUEST, SUCCESS, FAILURE];
};

export default function createRequestSaga(type: string, request: any) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action: Actions) {
    yield put(startLoading(type));
    try {
      const response = yield call(request, action.payload);
      yield put({ type: SUCCESS, payload: response.data });
    } catch (err) {
      yield put({ type: FAILURE, payload: err.message });
    }
    yield put(finishLoading(type));
  };
}
