import { call, put, select, takeEvery } from "redux-saga/effects";
import he from "he";
import { getCycles } from "../api-fetch-saved-cycles/fetchSavedCycles";
import { FETCH_SAVED_CYCLES, UPDATE_IS_FETCHING_SAVED_CYCLES } from "../redux/actionTypes";

function* fetchCycles() {
  yield put({
    type: UPDATE_IS_FETCHING_SAVED_CYCLES,
    payload: { newIsFetching: true },
  });
}

export function* savedCycleSaga() {
  yield takeEvery(FETCH_SAVED_CYCLES, fetchCycles);
}
