"use client";

import { Fragment, useState, useEffect } from "react";
import { usePrevious } from "@/lib/hooks/usePrevious";
import { StepOrigin } from "@/ui/steps/step-origin";
import { Step } from "@/ui/steps/step";
import { StepFinal } from "@/ui/steps/step-final";
import { CycleResult } from "@/ui/steps/cycle-result";
import {
  defaultOriginLang,
  defaultOriginText,
  defaultSteps,
  defaultSupportedLangs,
} from "@/default-values";
import { getRandomLang } from "@/lib/utils";
import { Language, Step as StepType, TranslationText } from "@/types";
import { addCycle } from "@/lib/savedCycles";

const Steps = (): React.JSX.Element => {
  const supportedLangs: Language[] = defaultSupportedLangs;
  const [originLang, setOriginLang] = useState<Language>(defaultOriginLang);
  const [originText, setOriginText] =
    useState<TranslationText>(defaultOriginText);
  const [steps, setSteps] = useState<StepType[]>(defaultSteps);
  const [isFetchingAny, setIsFetchingAny] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [pageState, setPageState] = useState<"edit" | "translate" | "result">(
    "edit"
  );
  const previousStepsLength = usePrevious(steps.length);

  const langsWithoutOrigin = supportedLangs.filter(
    (lang) => lang !== originLang
  );

  const updateOriginLang = (newLang: Language): void => {
    setOriginLang(newLang);
  };
  const updateOriginText = (newText: TranslationText): void => {
    setOriginText(newText);
  };
  const updateStepLang = (stepIndex: number, newLang: Language) => {
    setSteps(
      steps.map((step, i) =>
        i === stepIndex ? { ...step, lang: newLang } : step
      )
    );
  };
  const randomizeStepLang = (
    stepIndex: number,
    langsWithoutOrigin: Language[]
  ) => {
    updateStepLang(stepIndex, getRandomLang(langsWithoutOrigin));
  };
  const addStep = (langsWithoutOrigin: Language[]) => {
    const allButLastStep = steps.splice(0, steps.length - 1);
    const lastStep = steps[steps.length - 1];
    setSteps([
      ...allButLastStep,
      {
        lang: getRandomLang(langsWithoutOrigin),
        text: "",
        isFetching: false,
      },
      lastStep,
    ]);
  };
  const removeStep = (stepIndex: number) => {
    setSteps(steps.filter((step, i) => i !== stepIndex));
  };

  const fetchStepTranslation = async (stepIndex: number) => {
    const sourceLang = stepIndex === 0 ? originLang : steps[stepIndex - 1].lang;
    const textToTranslate =
      stepIndex === 0 ? originText : steps[stepIndex - 1].text;

    const translationResponse = await fetch("api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: sourceLang,
        to: steps[stepIndex].lang,
        text: textToTranslate,
      }),
    });
    const data = await translationResponse.json();
    const translation = data.translation;

    setSteps(
      steps.map((step, i) =>
        i === stepIndex
          ? { ...step, isFetching: false, text: translation }
          : step
      )
    );
    setCurrentStep(stepIndex + 1);
  };

  const handleBeginCycle = async () => {
    setIsFetchingAny(true);
    setCurrentStep(0);
  };

  useEffect(() => {
    if (currentStep > -1) {
      if (currentStep > steps.length - 1) {
        setIsFetchingAny(false);
        setCurrentStep(-1);
        setPageState("result");
      } else {
        setSteps(
          steps.map((step, i) =>
            i === currentStep ? { ...step, isFetching: true } : step
          )
        );
        fetchStepTranslation(currentStep);
      }
    }
  }, [currentStep]);

  // when a new step is added, scroll to the bottom of the page
  useEffect(() => {
    if (!previousStepsLength || steps.length > previousStepsLength) {
      window.scroll({
        top: document.documentElement.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [steps, previousStepsLength]);

  if (pageState === "result") {
    function handleEdit() {
      setPageState("edit");
    }
    async function handleSave() {
      await addCycle();
      alert("cycle saved! check out the Saved page to see other saved cycles.");
      setPageState("edit");
    }
    return (
      <CycleResult
        steps={steps}
        handleEdit={handleEdit}
        handleSave={handleSave}
      />
    );
  }

  return (
    <div>
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
            <button
              disabled={isFetchingAny}
              key="button_add_step"
              className="mt-1 rounded bg-orange-500 p-1 shadow-md hover:bg-orange-600"
              onClick={() => addStep(langsWithoutOrigin)}
            >
              add language
            </button>

            <StepFinal
              key="final_step"
              isTranslating={step.isFetching}
              lang={step.lang}
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
            randomizeLang={() =>
              randomizeStepLang(stepIndex, langsWithoutOrigin)
            }
            removeStep={() => removeStep(stepIndex)}
          />
        )
      )}

      <button
        disabled={isFetchingAny || originText === ""}
        className="mt-1 rounded bg-orange-500 p-1 shadow-md hover:bg-orange-600"
        onClick={() => handleBeginCycle()}
      >
        translate
      </button>
    </div>
  );
};

export { Steps };
