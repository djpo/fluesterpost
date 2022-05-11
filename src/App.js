import React, { useState } from 'react';
import { useTranslation } from './hooks/useTranslation';
import { defaultSupportedLanguages } from './defaultState';
import { TranslatedText } from './TranslatedText';
import { StepRow } from './StepRow';
import './App.css';

const App = () => {
  const [languages] = useState(defaultSupportedLanguages);
  const [originLanguage, setOriginLanguage] = useState(defaultSupportedLanguages[15]);
  const [targetLanguage, setTargetLanguage] = useState(defaultSupportedLanguages[13]);
  const [originText, setOriginText] = useState('');
  const { isFetching, error, translation, fetchTranslation } = useTranslation();

  const handleChooseOriginLanguage = (event) => {
    setOriginLanguage(event.target.value);
  };

  const handleChooseTargetLanguage = (event) => {
    setTargetLanguage(event.target.value);
  };

  const handleBeginTranslation = () => {
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
          <select className="language-picker" value={originLanguage} onChange={handleChooseOriginLanguage}>
            {languages.map((language, i) => (
              <option key={i} value={language}>{language}</option>
            ))}
          </select>
          <button
            className="random-button"
            onClick={() => setOriginLanguage(languages[Math.floor(Math.random() * languages.length)])}
          >
            randomize
          </button>
        </div>

        <div className="origin-text">
          <input
            value={originText}
            onChange={e => setOriginText(e.target.value)}
            placeholder="enter text"
          />
        </div>

        <hr />

        <div className="gray-box">
          target language:
          <select className="language-picker" value={targetLanguage} onChange={handleChooseTargetLanguage}>
            {languages.map((language, i) => (
              <option key={i} value={language}>{language}</option>
            ))}
          </select>
          <button
            className="random-button"
            onClick={() => setTargetLanguage(languages[Math.floor(Math.random() * languages.length)])}
          >
            randomize
          </button>
        </div>

        <hr />

        <button
          disabled={isFetching}
          className="gray-box"
          onClick={() => handleBeginTranslation()}
        >
          translate
        </button>

        <div className="translation">
          {error && (<p>error: {error.message}</p>)}
          <TranslatedText
            isTranslating={isFetching}
            text={translation}
          />
        </div>

        <StepRow />
        <StepRow />
        <StepRow />
      </div>
    </div>
  );
};

export { App };
