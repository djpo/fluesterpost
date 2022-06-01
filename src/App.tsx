import { useState } from "react";
import { useTranslation } from "./hooks/useTranslation";
import { defaultSupportedLanguages } from "./defaultState";
import { Step } from "./Step";
import { StepOrigin } from "./StepOrigin";
import { StepFinal } from "./StepFinal";
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

  const langsWithoutOrigin = languages.filter((lang) => lang !== originLanguage);

  const handleChooseOriginLanguage = (event: Event): void => {
    setOriginLanguage(event.target.value);
  };
  const handleChooseTargetLanguage = (event: Event): void => {
    setTargetLanguage(event.target.value);
  };
  const handleRandomizeTargetLanguage = (): void => {
    setTargetLanguage(languages[Math.floor(Math.random() * languages.length)]);
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
        {error && <p>error: {error.message}</p>}

        <StepOrigin
          isTranslating={isFetching}
          language={originLanguage}
          text={originText}
          languages={languages}
          chooseLanguage={handleChooseOriginLanguage}
          updateText={setOriginText}
        />

        <Step
          isTranslating={isFetching}
          language={targetLanguage}
          text={translation1}
          languages={langsWithoutOrigin}
          chooseLanguage={handleChooseTargetLanguage}
          randomizeLanguage={handleRandomizeTargetLanguage}
        />

        <StepFinal isTranslating={isFetching} originLanguage={originLanguage} text={translation2} />

        <br />
        <button
          disabled={isFetching || originText === ""}
          className="primary-button"
          onClick={() => handleBeginTranslation()}
        >
          translate
        </button>
      </div>
    </div>
  );
}

export { App };
