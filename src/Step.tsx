import type { Language, TranslationText } from "./types";
import "./Step.css";

interface Event {
  target: {
    value: string;
  };
}

interface Props {
  isTranslating: boolean;
  language: Language;
  text: TranslationText;
  languages: Language[];
  chooseLanguage: (event: Event) => void;
  randomizeLanguage: () => void;
}

function Step({
  isTranslating,
  language,
  text,
  languages,
  chooseLanguage,
  randomizeLanguage,
}: Props): JSX.Element {
  return (
    <div className={isTranslating ? "step-row step-row-translating" : "step-row"}>
      <div className="step-left-line-container">
        <div className="step-left-line" />
      </div>

      <div className="step-lang-box">
        <div className="step-lang-box-top">
          <button className="step-lang-little-button" onClick={randomizeLanguage}>
            r
          </button>
        </div>

        <div className="step-lang-box-bottom">
          <select
            className="language-picker"
            // @ts-ignore
            value={language}
            onChange={chooseLanguage}
          >
            {languages.map((languageOption) => (
              // @ts-ignore
              <option key={languageOption} value={languageOption}>
                {languageOption}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="step-text">
        <p>{text || ""}</p>
      </div>
    </div>
  );
}

export { Step };
