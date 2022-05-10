import React, { useState, useEffect } from 'react';
import { useTranslation } from './hooks/useTranslation';
import { defaultSupportedLanguages } from './defaultState';
import { TranslatedText } from './TranslatedText';
import './App.css';

const App = () => {
  const [languages] = useState(defaultSupportedLanguages);
  const [originLanguage, setOriginLanguage] = useState(defaultSupportedLanguages[15]);
  const [originText, setOriginText] = useState('sunshine');
  const { isFetching, error, translation, fetchTranslation } = useTranslation();

  const handleChooseOriginLanguage = (event) => {
    setOriginLanguage(event.target.value);
  };

  const handleBeginTranslation = () => {
    fetchTranslation();
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Flüsterpost</p>
      </header>

      <div className="App-body">
        <div className="button">
          origin language:
          <select className="origin-language-picker" value={originLanguage} onChange={handleChooseOriginLanguage}>
            {languages.map((language, i) => (
              <option key={i} value={language}>{language}</option>
            ))}
          </select>
        </div>

        <button
          className="button"
          onClick={() => setOriginLanguage(languages[Math.floor(Math.random() * languages.length)])}
        >
          randomize
        </button>

        <hr />
        <div className="origin-text">
          <p>origin text</p>
          <input
            value={originText}
            onChange={e => setOriginText(e.target.value)}
            placeholder="enter text"
          />
        </div>

        <p>{originText}</p>

        <hr />
        <button
          disabled={isFetching}
          className="button"
          onClick={() => handleBeginTranslation()}
        >
          translate into German
        </button>

        <div className="translation">
          {error && (<p>error: {error.message}</p>)}
          <TranslatedText
            isTranslating={isFetching}
            text={translation}
          />
        </div>
      </div>
    </div>
  );
};

export { App };
