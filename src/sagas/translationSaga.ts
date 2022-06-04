import { call, put, select, takeEvery } from "redux-saga/effects";
import { selectOriginLang, selectOriginText, selectSteps } from "../redux/selectors";
import { fetchTranslation } from "../api-fetch-translations/fetchTranslation";
import {
  UPDATE_STEP_TEXT,
  UPDATE_IS_FETCHING_ANY,
  UPDATE_ERROR,
  CLEAR_ALL_STEPS_TEXT,
  FETCH_TRANSLATIONS,
  UPDATE_STEP_IS_FETCHING,
} from "../redux/actionTypes";
import type { Language, TranslationText, Step } from "../types";

function* fetchStepTranslation(
  originLang: Language,
  originText: TranslationText,
  stepIndex: number
) {
  const steps: Step[] = yield select(selectSteps);
  const thisStep = steps[stepIndex];
  const previousStep = steps[stepIndex - 1];
  const sourceLang = stepIndex === 0 ? originLang : previousStep.lang;
  const targetLang = thisStep.lang;
  const textToTranslate = stepIndex === 0 ? originText : previousStep.text;

  yield put({
    type: UPDATE_STEP_IS_FETCHING,
    payload: { stepIndexToUpdate: stepIndex, newIsFetching: true },
  });
  // @ts-ignore
  const response = yield call(fetchTranslation, sourceLang, targetLang, textToTranslate);
  const translation = response.data.data.translations[0].translatedText;
  yield put({
    type: UPDATE_STEP_TEXT,
    payload: { stepIndexToUpdate: stepIndex, newText: translation },
  });
  yield put({
    type: UPDATE_STEP_IS_FETCHING,
    payload: { stepIndexToUpdate: stepIndex, newIsFetching: false },
  });
}

function* fetchAllTranslations() {
  try {
    const originLang: Language = yield select(selectOriginLang);
    const originText: TranslationText = yield select(selectOriginText);
    const steps: Step[] = yield select(selectSteps);

    yield put({ type: UPDATE_IS_FETCHING_ANY, payload: { newIsFetchingAny: true } });
    yield put({ type: UPDATE_ERROR, payload: { newError: null } });
    yield put({ type: CLEAR_ALL_STEPS_TEXT });

    for (let i = 0; i < steps.length; i += 1) {
      yield fetchStepTranslation(originLang, originText, i);
    }
  } catch (err: any) {
    yield put({
      type: UPDATE_ERROR,
      payload: { newError: err.message },
    });
  } finally {
    yield put({ type: UPDATE_IS_FETCHING_ANY, payload: { newIsFetchingAny: false } });
  }
}

export function* translationSaga() {
  yield takeEvery(FETCH_TRANSLATIONS, fetchAllTranslations);
}
