import type { Language, TranslationText } from "./types";
import "./Step.css";

interface Props {
  isTranslating: boolean;
  originLang: Language;
  text: TranslationText;
}

function StepFinal({ isTranslating, originLang, text }: Props): JSX.Element {
  return (
    <div className={isTranslating ? "step-row step-row-translating" : "step-row"}>
      <div className="step-left-line-container">
        <div className="step-left-line step-left-line-final" />
      </div>

      <div className="step-lang-box step-lang-box-origin">
        <div className="step-lang-box-bottom">
          <p className="language-picker-spacer">{originLang}</p>
        </div>
      </div>

      <div className="step-text">
        <p>{text}</p>
      </div>
    </div>
  );
}

export { StepFinal };
