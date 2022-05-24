import { useState } from "react";
import { useTranslation } from "./hooks/useTranslation";
import { defaultSupportedLanguages } from "./defaultState";
import { TranslatedText } from "./TranslatedText";
import { StepRow } from "./StepRow";
import "./App.css";
import type { Language, TranslationText } from "./types";

interface Event {
  target: {
    value: string;
  };
}

function App(): JSX.Element {
  const [languages] = useState<Language[]>(defaultSupportedLanguages);
  const [originLanguage, setOriginLanguage] = useState<Language>(
    defaultSupportedLanguages[15] // en
  );
  const [targetLanguage, setTargetLanguage] = useState<Language>(
    defaultSupportedLanguages[13] // de
  );
  const [originText, setOriginText] = useState<TranslationText>("");
  const { isFetching, error, translation1, translation2, fetchTranslation } = useTranslation();

  const handleChooseOriginLanguage = (event: Event): void => {
    setOriginLanguage(event.target.value);
  };

  const handleChooseTargetLanguage = (event: Event): void => {
    setTargetLanguage(event.target.value);
  };

  const handleBeginTranslation = (): void => {
    fetchTranslation(originLanguage, targetLanguage, originText);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Flüsterpost</p>
      </header>

      <div className="App-body">
        <div className="gray-box">
          origin language:
          <select
            className="language-picker language-picker-origin"
            // @ts-ignore
            value={originLanguage}
            onChange={handleChooseOriginLanguage}
          >
            {languages.map((language, i) => (
              // @ts-ignore
              <option key={i} value={language}>
                {language}
              </option>
            ))}
          </select>
          <button
            className="random-button"
            onClick={() =>
              setOriginLanguage(languages[Math.floor(Math.random() * languages.length)])
            }
          >
            randomize
          </button>
        </div>

        <div className="origin-text">
          <input
            // @ts-ignore
            value={originText}
            onChange={(e) => setOriginText(e.target.value)}
            placeholder="enter text"
          />
        </div>

        <StepRow
          isTranslating={isFetching}
          language={targetLanguage}
          text={translation1}
          languages={languages}
          chooseLanguage={handleChooseTargetLanguage}
        />

        <br />

        <button disabled={isFetching} className="gray-box" onClick={() => handleBeginTranslation()}>
          translate
        </button>

        <div className="translation">
          {error && <p>error: {error.message}</p>}
          <TranslatedText isTranslating={isFetching} text={translation2} />
        </div>
      </div>
    </div>
  );
}

export { App };
