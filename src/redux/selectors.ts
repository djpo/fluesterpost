import type { RootState } from "./store";
import type { Language, TranslationText, Step, ErrorMessage } from "../types";

export const selectSupportedLangs = (state: RootState): Language[] => state.supportedLangs;
export const selectOriginLang = (state: RootState): Language => state.originLang;
export const selectOriginText = (state: RootState): TranslationText => state.originText;
export const selectSteps = (state: RootState): Step[] => state.steps;
export const selectIsFetchingAny = (state: RootState): boolean => state.isFetchingAny;
export const selectErrorMessage = (state: RootState): ErrorMessage => state.errorMessage;
export const selectAreInstructionsVisible = (state: RootState): boolean =>
  state.areInstructionsVisible;
