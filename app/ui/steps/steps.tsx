"use client";

import { Fragment, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { usePrevious } from "@/lib/hooks/usePrevious";
import { getRandomLang } from "@/lib/utils";
import { addCycle } from "@/lib/savedCycles";
import { StepOrigin } from "@/ui/steps/step-origin";
import { Step } from "@/ui/steps/step";
import { StepFinal } from "@/ui/steps/step-final";
import { CycleResult } from "@/ui/steps/cycle-result";
import { defaultCycleSteps, defaultSupportedLangs } from "@/default-values";
import { CycleStep, Language, TranslationText } from "@/types";

const Steps = (): React.JSX.Element => {
  const supportedLangs: Language[] = defaultSupportedLangs;
  const [steps, setSteps] = useState<CycleStep[]>(defaultCycleSteps);
  const [fetchingStepIndex, setFetchingStepIndex] = useState<number>(-1);
  const [pageState, setPageState] = useState<"edit" | "translate" | "result">(
    "edit"
  );
  const previousStepsLength = usePrevious(steps.length);
  const langsWithoutOrigin = supportedLangs.filter(
    (lang) => lang !== steps[0].lang
  );
  const isFetchingAny = fetchingStepIndex > -1;

  const updateOriginLang = (newLang: Language): void => {
    setSteps(
      steps.map((step, i) =>
        i === 0 || i === steps.length - 1 ? { ...step, lang: newLang } : step
      )
    );
  };
  const updateOriginText = (newText: TranslationText): void => {
    setSteps(
      steps.map((step, i) => (i === 0 ? { ...step, text: newText } : step))
    );
  };
  const updateStepLang = (stepId: string, newLang: Language) => {
    setSteps(
      steps.map((step) =>
        step.id === stepId ? { ...step, lang: newLang } : step
      )
    );
  };
  const randomizeStepLang = (
    stepId: string,
    langsWithoutOrigin: Language[]
  ) => {
    updateStepLang(stepId, getRandomLang(langsWithoutOrigin));
  };
  const addStep = (langsWithoutOrigin: Language[]) => {
    const allButLastStep = steps.splice(0, steps.length - 1);
    const lastStep = steps[steps.length - 1];
    setSteps([
      ...allButLastStep,
      {
        id: uuidv4(),
        lang: getRandomLang(langsWithoutOrigin),
        text: "",
      },
      lastStep,
    ]);
  };
  const removeStep = (stepId: string) => {
    setSteps(steps.filter((step) => step.id !== stepId));
  };

  const fetchStepTranslation = async (stepIndex: number) => {
    const sourceLang = steps[stepIndex - 1].lang;
    const textToTranslate = steps[stepIndex - 1].text;

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
        i === stepIndex ? { ...step, text: translation } : step
      )
    );
    setFetchingStepIndex(stepIndex + 1);
  };

  const handleBeginCycle = async () => {
    setFetchingStepIndex(1);
  };

  useEffect(() => {
    if (isFetchingAny) {
      if (fetchingStepIndex > steps.length - 1) {
        setFetchingStepIndex(-1);
        setPageState("result");
      } else {
        setFetchingStepIndex(fetchingStepIndex);
        fetchStepTranslation(fetchingStepIndex);
      }
    }
  }, [fetchingStepIndex]);

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
      await addCycle(steps);
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
        lang={steps[0].lang}
        text={steps[0].text}
        langs={supportedLangs}
        chooseLang={updateOriginLang}
        updateText={updateOriginText}
      />

      {steps.map((step: CycleStep, stepIndex: number) => {
        if (stepIndex === steps.length - 1) {
          return (
            <Fragment key={step.id}>
              <button
                disabled={isFetchingAny}
                className="mt-1 rounded bg-orange-500 p-1 shadow-md hover:bg-orange-600 disabled:bg-orange-700"
                onClick={() => addStep(langsWithoutOrigin)}
              >
                add language
              </button>

              <StepFinal
                isTranslating={stepIndex === fetchingStepIndex}
                lang={step.lang}
                text={step.text}
              />
            </Fragment>
          );
        } else if (stepIndex > 0) {
          return (
            <Step
              key={step.id}
              hasRemoveButton={stepIndex > 1}
              isTranslating={stepIndex === fetchingStepIndex}
              lang={step.lang}
              text={step.text}
              langs={langsWithoutOrigin}
              chooseLang={(newLang) => updateStepLang(step.id, newLang)}
              randomizeLang={() =>
                randomizeStepLang(step.id, langsWithoutOrigin)
              }
              removeStep={() => removeStep(step.id)}
            />
          );
        }
      })}

      <button
        disabled={isFetchingAny || steps[0].text === ""}
        className="mt-1 rounded bg-orange-500 p-1 shadow-md hover:bg-orange-600 disabled:bg-orange-700"
        onClick={() => handleBeginCycle()}
      >
        translate
      </button>
    </div>
  );
};

export { Steps };
