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
  updateText: (arg0: any) => void;
}

function StepOrigin({
  isTranslating,
  language,
  text,
  languages,
  chooseLanguage,
  updateText,
}: Props): JSX.Element {
  return (
    <div className={isTranslating ? "step-row step-row-translating" : "step-row"}>
      <div className="step-left-line-container">
        <div className="step-left-line step-left-line-origin" />
      </div>

      <div className="step-lang-box step-lang-box-origin">
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
        <textarea
          wrap="soft"
          // @ts-ignore
          value={text}
          onChange={(e) => updateText(e.target.value)}
          placeholder="enter text"
        />
      </div>
    </div>
  );
}

export { StepOrigin };
