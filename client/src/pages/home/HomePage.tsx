import { Fragment } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  updateOriginLang as updateOriginLangAction,
  updateOriginText as updateOriginTextAction,
  updateStepLang as updateStepLangAction,
  randomizeStepLang as randomizeStepLangAction,
  fetchTranslations,
  addStep as addStepAction,
  removeStep as removeStepAction,
} from "../../redux/actions";
import {
  selectSupportedLangs,
  selectOriginLang,
  selectOriginText,
  selectSteps,
  selectIsFetchingAny,
  selectErrorMessage,
  selectAreInstructionsVisible,
} from "../../redux/selectors";
import { Instructions } from "./Instructions";
import { Step } from "./Step";
import { StepOrigin } from "./StepOrigin";
import { StepFinal } from "./StepFinal";
import type { Language, TranslationText, Step as StepType, ErrorMessage } from "../../types";
import "./HomePage.css";

interface Props {
  updateOriginLang: (newLang: Language) => void;
  updateOriginText: (newText: TranslationText) => void;
  updateStepLang: (indexToUpdate: number, newLang: Language) => void;
  randomizeStepLang: (indexToUpdate: number, langsWithoutOrigin: Language[]) => void;
  addStep: (langsWithoutOrigin: Language[]) => void;
  removeStep: (indexToRemove: number) => void;
}

const HomePageUnconnected = ({
  updateOriginLang,
  updateOriginText,
  updateStepLang,
  randomizeStepLang,
  addStep,
  removeStep,
}: Props): JSX.Element => {
  const supportedLangs: Language[] = useSelector(selectSupportedLangs);
  const originLang: Language = useSelector(selectOriginLang);
  const originText: TranslationText = useSelector(selectOriginText);
  const steps: StepType[] = useSelector(selectSteps);
  const isFetchingAny: boolean = useSelector(selectIsFetchingAny);
  const errorMessage: ErrorMessage = useSelector(selectErrorMessage);
  const areInstructionsVisible: boolean = useSelector(selectAreInstructionsVisible);

  const langsWithoutOrigin = supportedLangs.filter((lang) => lang !== originLang);

  const dispatch = useDispatch();

  const handleBeginTranslation = (): void => {
    dispatch(fetchTranslations());
  };

  return (
    <>
      <Link to="saved">SavedCyclesPage</Link>
      <p />

      {areInstructionsVisible && <Instructions />}

      {errorMessage && <p>error: {errorMessage}</p>}

      <StepOrigin
        isTranslating={isFetchingAny}
        lang={originLang}
        text={originText}
        langs={supportedLangs}
        chooseLang={updateOriginLang}
        updateText={updateOriginText}
      />

      {steps.map((step: StepType, stepIndex: number) =>
        stepIndex === steps.length - 1 ? (
          <Fragment key="final_step_container">
            <br />
            <button
              disabled={isFetchingAny}
              key="button_add_step"
              className="primary-button"
              onClick={() => addStep(langsWithoutOrigin)}
            >
              add step
            </button>

            <StepFinal
              key="final_step"
              isTranslating={step.isFetching}
              originLang={step.lang}
              text={step.text}
            />
          </Fragment>
        ) : (
          <Step
            key={stepIndex.toString()}
            hasRemoveButton={stepIndex !== 0}
            isTranslating={step.isFetching}
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
        disabled={isFetchingAny || originText === ""}
        className="primary-button"
        onClick={() => handleBeginTranslation()}
      >
        translate
      </button>
    </>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  updateOriginLang: updateOriginLangAction,
  updateOriginText: updateOriginTextAction,
  updateStepLang: updateStepLangAction,
  randomizeStepLang: randomizeStepLangAction,
  addStep: addStepAction,
  removeStep: removeStepAction,
};

const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageUnconnected);

export { HomePage };
