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
          <button className="step-lang-little-button">r</button>
        </div>

        <div className="step-lang-box-bottom">
          <select
            className="language-picker"
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
      </div>

      <div className="step-lang-text">{text || "placeholder"}</div>
    </div>
  );
}

StepRow.defaultProps = {
  text: "placeholder",
};

export { StepRow };
