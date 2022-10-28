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
  UPDATE_IS_FETCHING_SAVED_CYCLES,
  UPDATE_SAVED_CYCLES,
} from "./actionTypes";
import {
  defaultSupportedLangs,
  defaultOriginLang,
  defaultOriginText,
  defaultSteps,
  defaultErrorMessage,
  defaultAreInstructionsVisible,
  defaultSavedCycles,
  defaultResultCycle,
} from "./defaultState";

const initialState = {
  supportedLangs: defaultSupportedLangs,
  originLang: defaultOriginLang,
  originText: defaultOriginText,
  steps: defaultSteps,
  isFetchingAny: false,
  errorMessage: defaultErrorMessage,
  areInstructionsVisible: defaultAreInstructionsVisible,
  savedCycles: defaultSavedCycles,
  isFetchingSavedCycles: false,
  resultCycle: defaultResultCycle,
};

/* @ts-ignore */ /* eslint-disable-next-line default-param-last */
export function appReducer(state = initialState, { type, payload }) {
  switch (type) {
    case UPDATE_ORIGIN_LANG: {
      const finalStepIndex = state.steps.length - 1;
      return {
        ...state,
        originLang: payload.newLang,
        steps: state.steps.map((step, i) =>
          i === finalStepIndex ? { ...step, lang: payload.newLang } : step
        ),
      };
    }
    case UPDATE_ORIGIN_TEXT: {
      return {
        ...state,
        originText: payload.newText,
      };
    }
    case UPDATE_STEP_LANG: {
      return {
        ...state,
        steps: state.steps.map((step, i) =>
          i === payload.stepIndexToUpdate ? { ...step, lang: payload.newLang } : step
        ),
      };
    }
    case UPDATE_STEP_TEXT: {
      return {
        ...state,
        steps: state.steps.map((step, i) =>
          i === payload.stepIndexToUpdate ? { ...step, text: payload.newText } : step
        ),
      };
    }
    case UPDATE_IS_FETCHING_ANY: {
      return {
        ...state,
        isFetchingAny: payload.newIsFetchingAny,
      };
    }
    case UPDATE_STEP_IS_FETCHING: {
      return {
        ...state,
        steps: state.steps.map((step, i) =>
          i === payload.stepIndexToUpdate ? { ...step, isFetching: payload.newIsFetching } : step
        ),
      };
    }
    case UPDATE_ERROR: {
      return {
        ...state,
        errorMessage: payload.newError,
      };
    }
    case CLEAR_ALL_STEPS_TEXT: {
      return {
        ...state,
        steps: state.steps.map((step) => ({ ...step, text: "" })),
      };
    }
    case ADD_STEP: {
      const allButLastStep = state.steps.splice(0, state.steps.length - 1);
      const lastStep = state.steps[state.steps.length - 1];
      return {
        ...state,
        steps: [
          ...allButLastStep,
          {
            lang: payload.newLang,
            text: "",
            isFetching: false,
          },
          lastStep,
        ],
      };
    }
    case REMOVE_STEP: {
      return {
        ...state,
        // @ts-ignore
        steps: state.steps.filter((step, i) => i !== payload.stepIndexToRemove),
      };
    }
    case DISMISS_INSTRUCTIONS: {
      return {
        ...state,
        areInstructionsVisible: false,
      };
    }
    case UPDATE_IS_FETCHING_SAVED_CYCLES: {
      return {
        ...state,
        isFetchingSavedCycles: payload.newIsFetching,
      };
    }
    case UPDATE_SAVED_CYCLES: {
      return {
        ...state,
        savedCycles: payload.newSavedCycles,
      };
    }
    default:
      return state;
  }
}
