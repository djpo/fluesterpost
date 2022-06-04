import type { Language, TranslationText, Event } from "./types";
import "./Step.css";

interface Props {
  isTranslating: boolean;
  lang: Language;
  text: TranslationText;
  langs: Language[];
  chooseLang: (newLang: Language) => void;
  updateText: (newText: TranslationText) => void;
}

function StepOrigin({
  isTranslating,
  lang,
  text,
  langs,
  chooseLang,
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
            value={lang}
            onChange={(e: Event) => chooseLang(e.target.value)}
          >
            {langs.map((langOption) => (
              // @ts-ignore
              <option key={langOption} value={langOption}>
                {langOption}
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
