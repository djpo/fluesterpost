import {
  UPDATE_ORIGIN_LANG,
  UPDATE_ORIGIN_TEXT,
  UPDATE_STEP_LANG,
  UPDATE_STEP_TEXT,
  UPDATE_IS_FETCHING_ANY,
  UPDATE_STEP_IS_FETCHING,
  UPDATE_ERROR,
  CLEAR_ALL_STEPS_TEXT,
  ADD_STEP,
  REMOVE_STEP,
  DISMISS_INSTRUCTIONS,
} from "./actionTypes";
import type { Language, TranslationText, ErrorMessage } from "../types";

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

export function updateError(newError: ErrorMessage) {
  return {
    type: UPDATE_ERROR,
    payload: { newError },
  };
}

export function clearAllStepsText() {
  return { type: CLEAR_ALL_STEPS_TEXT };
}

export function addStep(langsWithoutOrigin: Language[]) {
  const randomLang = langsWithoutOrigin[Math.floor(Math.random() * langsWithoutOrigin.length)];
  return {
    type: ADD_STEP,
    payload: { newLang: randomLang },
  };
}

export function removeStep(stepIndexToRemove: number) {
  return {
    type: REMOVE_STEP,
    payload: { stepIndexToRemove },
  };
}

export function dismissInstructions() {
  return { type: DISMISS_INSTRUCTIONS };
}
