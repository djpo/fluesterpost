import { connect, useSelector, useDispatch } from "react-redux";
import {
  updateOriginLang as updateOriginLangAction,
  updateOriginText as updateOriginTextAction,
  updateStepLang as updateStepLangAction,
  randomizeStepLang as randomizeStepLangAction,
  addStep as addStepAction,
  removeStep as removeStepAction,
} from "./redux/actions";
import {
  selectSupportedLangs,
  selectOriginLang,
  selectOriginText,
  selectSteps,
  selectIsFetchingAny,
  selectError,
} from "./redux/selectors";
import { Step } from "./Step";
import { StepOrigin } from "./StepOrigin";
import { StepFinal } from "./StepFinal";
import "./App.css";
import type { Language, TranslationText, Step as StepType, Error } from "./types";

interface Props {
  updateOriginLang: (newLang: Language) => void;
  updateOriginText: (newText: TranslationText) => void;
  updateStepLang: (indexToUpdate: number, newLang: Language) => void;
  randomizeStepLang: (indexToUpdate: number, langsWithoutOrigin: Language[]) => void;
  addStep: (langsWithoutOrigin: Language[]) => void;
  removeStep: (indexToRemove: number) => void;
}

function AppUnconnected({
  updateOriginLang,
  updateOriginText,
  updateStepLang,
  randomizeStepLang,
  addStep,
  removeStep,
}: Props): JSX.Element {
  const supportedLangs: Language[] = useSelector(selectSupportedLangs);
  const originLang: Language = useSelector(selectOriginLang);
  const originText: TranslationText = useSelector(selectOriginText);
  const steps: StepType[] = useSelector(selectSteps);
  const isFetchingAny: boolean = useSelector(selectIsFetchingAny);
  const error: Error = useSelector(selectError);
  // @ts-ignore
  const errorMessage: string = error ? error.message : "unknown error";

  const langsWithoutOrigin = supportedLangs.filter((lang) => lang !== originLang);

  const dispatch = useDispatch();

  const handleBeginTranslation = (): void => {
    dispatch({ type: "FETCH_TRANSLATIONS" });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Flüsterpost</p>
      </header>

      <div className="App-body">
        {error && <p>error: {errorMessage}</p>}

        <StepOrigin
          isTranslating={isFetchingAny}
          // isLocked={isFetchingAny}
          lang={originLang}
          text={originText}
          langs={supportedLangs}
          chooseLang={updateOriginLang}
          updateText={updateOriginText}
        />

        {steps.map((step: StepType, stepIndex: number) =>
          stepIndex === steps.length - 1 ? (
            <StepFinal
              key={stepIndex.toString()}
              isTranslating={step.isFetching}
              originLang={step.lang}
              text={step.text}
            />
          ) : (
            <Step
              key={stepIndex.toString()}
              hasRemoveButton={stepIndex !== 0}
              isTranslating={step.isFetching}
              // isLocked={isFetchingAny}
              lang={step.lang}
              text={step.text}
              langs={langsWithoutOrigin}
              chooseLang={(newLang) => updateStepLang(stepIndex, newLang)}
              randomizeLang={() => randomizeStepLang(stepIndex, langsWithoutOrigin)}
              removeStep={() => removeStep(stepIndex)}
            />
          )
        )}

        <br />
        <button
          disabled={isFetchingAny}
          className="primary-button"
          onClick={() => addStep(langsWithoutOrigin)}
        >
          add step
        </button>

        <br />
        <button
          disabled={isFetchingAny || originText === ""}
          className="primary-button"
          onClick={() => handleBeginTranslation()}
        >
          translate
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  updateOriginLang: updateOriginLangAction,
  updateOriginText: updateOriginTextAction,
  updateStepLang: updateStepLangAction,
  randomizeStepLang: randomizeStepLangAction,
  addStep: addStepAction,
  removeStep: removeStepAction,
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppUnconnected);

export { App };
