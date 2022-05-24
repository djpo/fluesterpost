import type { Language, TranslationText } from "./types";
import "./StepRow.css";

interface Event {
  target: {
    value: string;
  };
}

interface Props {
  isTranslating: boolean;
  language: Language;
  text?: TranslationText;
  languages: Language[];
  chooseLanguage: (event: Event) => void;
}

function StepRow({ isTranslating, language, text, languages, chooseLanguage }: Props): JSX.Element {
  return (
    <div className={isTranslating ? "step-row step-row-translating" : "step-row"}>
      <div className="step-lang-box">
        <div className="step-lang-box-top">
          <button className="step-lang-button">x</button>
          <button className="step-lang-button">r</button>
        </div>
        <select
          className="step-lang-label"
          // @ts-ignore
          value={language}
          onChange={chooseLanguage}
        >
          {languages.map((languageOption, i) => (
            // @ts-ignore
            <option key={i} value={languageOption}>
              {languageOption}
            </option>
          ))}
        </select>
      </div>

      <div className="step-lang-text">{text || "placeholder"}</div>
    </div>
  );
}

StepRow.defaultProps = {
  text: "placeholder",
};

export { StepRow };
