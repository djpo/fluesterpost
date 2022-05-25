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
  text?: TranslationText;
  languages: Language[];
  chooseLanguage: (event: Event) => void;
  randomizeLanguage: () => void;
  updateText: (arg0: any) => void;
}

function StepOrigin({
  isTranslating,
  language,
  text,
  languages,
  chooseLanguage,
  randomizeLanguage,
  updateText,
}: Props): JSX.Element {
  return (
    <div className={isTranslating ? "step-row step-row-translating" : "step-row"}>
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
            {languages.map((languageOption, i) => (
              // @ts-ignore
              <option key={i} value={languageOption}>
                {languageOption}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="step-text">
        <textarea
          type="text"
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

StepOrigin.defaultProps = {
  text: "placeholder",
};

export { StepOrigin };
