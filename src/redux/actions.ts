import {
  UPDATE_ORIGIN_LANG,
  UPDATE_ORIGIN_TEXT,
  UPDATE_STEP_LANG,
  UPDATE_STEP_TEXT,
  UPDATE_IS_FETCHING_ANY,
  UPDATE_STEP_IS_FETCHING,
  UPDATE_ERROR,
  CLEAR_ALL_STEPS_TEXT,
} from "./actionTypes";
import type { Language, TranslationText, Error } from "../types";

export function updateOriginLang(newLang: Language) {
  return {
    type: UPDATE_ORIGIN_LANG,
    payload: { newLang },
  };
}

export function updateOriginText(newText: TranslationText) {
  return {
    type: UPDATE_ORIGIN_TEXT,
    payload: { newText },
  };
}

export function updateStepLang(stepIndexToUpdate: number, newLang: Language) {
  return {
    type: UPDATE_STEP_LANG,
    payload: { stepIndexToUpdate, newLang },
  };
}

export function randomizeStepLang(stepIndexToUpdate: number, langsWithoutOrigin: Language[]) {
  const randomLang = langsWithoutOrigin[Math.floor(Math.random() * langsWithoutOrigin.length)];
  return {
    type: UPDATE_STEP_LANG,
    payload: { stepIndexToUpdate, newLang: randomLang },
  };
}

export function updateStepText(stepIndexToUpdate: number, newText: TranslationText) {
  return {
    type: UPDATE_STEP_TEXT,
    payload: { stepIndexToUpdate, newText },
  };
}

export function updateIsFetchingAny(newIsFetchingAny: boolean) {
  return {
    type: UPDATE_IS_FETCHING_ANY,
    payload: { newIsFetchingAny },
  };
}

export function updateStepIsFetching(stepIndexToUpdate: number, newIsFetching: boolean) {
  return {
    type: UPDATE_STEP_IS_FETCHING,
    payload: { stepIndexToUpdate, newIsFetching },
  };
}

export function updateError(newError: Error) {
  return {
    type: UPDATE_ERROR,
    payload: { newError },
  };
}

export function clearAllStepsText() {
  return { type: CLEAR_ALL_STEPS_TEXT };
}
