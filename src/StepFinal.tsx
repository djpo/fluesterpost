import type { Language, TranslationText } from "./types";
import "./Step.css";

interface Props {
  isTranslating: boolean;
  originLanguage: Language;
  text: TranslationText;
}

function StepFinal({ isTranslating, originLanguage, text }: Props): JSX.Element {
  return (
    <div className={isTranslating ? "step-row step-row-translating" : "step-row"}>
      <div className="step-lang-box">
        <div className="step-lang-box-bottom">
          <p className="language-picker-spacer">{originLanguage}</p>
        </div>
      </div>

      <div className="step-text">
        <p>{text}</p>
      </div>
    </div>
  );
}

export { StepFinal };
