import type { Language, TranslationText, SavedCycleStep } from "../types";
import "./SavedCycle.css";

interface Props {
  originLang: Language;
  originText: TranslationText;
  steps: SavedCycleStep[];
}

const SavedCycle = ({ originLang, originText, steps }: Props): JSX.Element => {
  return (
    <div className="saved-cycle">
      <p className="step-lang-box-origin">
        ({originLang}) {originText}
      </p>
      {steps.map((step: SavedCycleStep, stepIndex: number) =>
        stepIndex === steps.length - 1 ? (
          <div key={stepIndex}>
            <p className="step-lang-box-origin">
              ({step.lang}) {step.text}
            </p>
          </div>
        ) : (
          <div key={stepIndex}>
            <p>
              ({step.lang}) {step.text}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export { SavedCycle };
