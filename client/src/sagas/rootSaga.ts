import { spawn } from "redux-saga/effects";
import { translationSaga } from "./translationSaga";
import { savedCycleSaga } from "./savedCyclesSaga";

export function* rootSaga() {
  yield spawn(translationSaga);
  yield spawn(savedCycleSaga);
}
