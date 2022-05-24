import type { Language, TranslationText } from "./types";
import "./StepRow.css";

interface Props {
  isTranslating: boolean;
  language: Language;
  text?: TranslationText;
}

function StepRow({ isTranslating, language, text }: Props): JSX.Element {
  return (
    <div className={isTranslating ? "step-row step-row-translating" : "step-row"}>
      <div className="step-lang-box">
        <div className="step-lang-box-top">
          <button className="step-lang-button">x</button>
          <button className="step-lang-button">r</button>
        </div>
        <p className="step-lang-label">{language}</p>
      </div>

      <div className="step-lang-text">{text || "placeholder"}</div>
    </div>
  );
}

StepRow.defaultProps = {
  text: "placeholder",
};

export { StepRow };
