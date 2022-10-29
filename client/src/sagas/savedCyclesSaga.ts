import { call, put, takeEvery } from "redux-saga/effects";
import { getCycles } from "../apis/fetchSavedCycles";
import {
  UPDATE_ERROR,
  FETCH_SAVED_CYCLES,
  UPDATE_IS_FETCHING_SAVED_CYCLES,
  UPDATE_SAVED_CYCLES,
} from "../redux/actionTypes";

function* fetchCycles() {
  try {
    yield put({
      type: UPDATE_IS_FETCHING_SAVED_CYCLES,
      payload: { newIsFetching: true },
    });

    // @ts-ignore
    const response = yield call(getCycles);

    yield put({
      type: UPDATE_SAVED_CYCLES,
      payload: { newSavedCycles: response },
    });
  } catch (err: any) {
    yield put({
      type: UPDATE_ERROR,
      payload: { newError: `${err.code} - ${err.message}` },
    });
  } finally {
    yield put({
      type: UPDATE_IS_FETCHING_SAVED_CYCLES,
      payload: { newIsFetching: false },
    });
  }
}

export function* savedCycleSaga() {
  yield takeEvery(FETCH_SAVED_CYCLES, fetchCycles);
}
