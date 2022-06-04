import type { Language, TranslationText, Event } from "./types";
import "./Step.css";

interface Props {
  isTranslating: boolean;
  lang: Language;
  text: TranslationText;
  langs: Language[];
  chooseLang: (newLang: Language) => void;
  randomizeLang: () => void;
}

function Step({ isTranslating, lang, text, langs, chooseLang, randomizeLang }: Props): JSX.Element {
  return (
    <div className={isTranslating ? "step-row step-row-translating" : "step-row"}>
      <div className="step-left-line-container">
        <div className="step-left-line" />
      </div>

      <div className="step-lang-box">
        <div className="step-lang-box-top">
          <button className="step-lang-little-button" onClick={randomizeLang}>
            r
          </button>
        </div>

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
        <p>{text || ""}</p>
      </div>
    </div>
  );
}

export { Step };
