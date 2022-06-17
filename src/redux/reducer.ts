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
} from "./actionTypes";
import {
  defaultSupportedLangs,
  defaultOriginLang,
  defaultOriginText,
  defaultSteps,
} from "./defaultState";

const initialState = {
  supportedLangs: defaultSupportedLangs,
  originLang: defaultOriginLang,
  originText: defaultOriginText,
  steps: defaultSteps,
  isFetchingAny: false,
  error: null,
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
        error: payload.newError,
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
    default:
      return state;
  }
}
