import { getLangLabel } from "./l10n/getLangLabel";
import type { Language, TranslationText, Event } from "./types";
import "./Step.css";

interface Props {
  hasRemoveButton: boolean;
  isTranslating: boolean;
  lang: Language;
  text: TranslationText;
  langs: Language[];
  chooseLang: (newLang: Language) => void;
  randomizeLang: () => void;
  removeStep: () => void;
}

const Step = ({
  hasRemoveButton,
  isTranslating,
  lang,
  text,
  langs,
  chooseLang,
  randomizeLang,
  removeStep,
}: Props): JSX.Element => (
  <div className={isTranslating ? "step-row step-row-translating" : "step-row"}>
    <div className="step-left-line-container">
      <div className="step-left-line" />
    </div>

    <div className="step-lang-box">
      <div className="step-lang-box-top">
        <button className="step-lang-little-button" onClick={randomizeLang}>
          r
        </button>
        {hasRemoveButton && (
          <button className="step-lang-little-button" onClick={removeStep}>
            x
          </button>
        )}
      </div>

      <div className="step-lang-box-bottom">
        <select
          className="language-picker"
          // @ts-ignore
          value={lang}
          onChange={(e: Event) => chooseLang(e.target.value)}
        >
          {langs.map((langCode) => (
            // @ts-ignore
            <option key={langCode} value={langCode}>
              {getLangLabel(langCode)}
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

export { Step };
