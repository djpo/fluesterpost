import { useState } from 'react';
import './App.css';
import { defaultSupportedLanguages } from './defaultState';

const App = () => {
  const [languages] = useState(defaultSupportedLanguages);
  const [originLanguage, setOriginLanguage] = useState(defaultSupportedLanguages[15]);

  function handleChooseOriginLanguage(event) {
    setOriginLanguage(event.target.value);
  }

  function useTextInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    function onChange(e) {
      setValue(e.target.value);
    }
    return {
      value,
      onChange,
    };
  }

  const textInputProps = useTextInput();

  return (
    <div className="App">
      <header className="App-header">
        <p>Flüsterpost</p>
      </header>

      <div className="App-body">
        <div className="origin-language-button">
          origin language:
          <select className="origin-language-picker" value={originLanguage} onChange={handleChooseOriginLanguage}>
            {languages.map((language, i) => (
              <option key={i} value={language}>{language}</option>
            ))}
          </select>
        </div>

        <button
          className="origin-language-button"
          onClick={() => setOriginLanguage(languages[Math.floor(Math.random() * languages.length)])}
        >
          randomize
        </button>

        <hr />
        <div className="origin-text">
          <p>origin text</p>
          <input
            value={textInputProps.value}
            onChange={textInputProps.onChange}
            placeholder="enter text"
          />
        </div>
      </div>
    </div>
  );
};

export { App };
