import { useState, useEffect } from 'react';
import { useAxios } from './hooks/useAxios';
import './App.css';
import { defaultSupportedLanguages } from './defaultState';

const App = () => {
  const [languages, setLanguages] = useState(defaultSupportedLanguages);
  const [originLanguage, setOriginLanguage] = useState(defaultSupportedLanguages[0]);

  const { response, loading, error } = useAxios();

  useEffect(() => {
    if (response !== null) {
      setLanguages(response.data.data.languages);
    }
  }, [response]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Flüsterpost</p>
      </header>

      <div className="App-body">
        <div className="origin-language">
          origin language: {originLanguage}
        </div>

        <button
          className="origin-language-button"
          onClick={() => setOriginLanguage(defaultSupportedLanguages[Math.floor(Math.random() * defaultSupportedLanguages.length)])}
        >
          set to random language
        </button>

        {error && (<p>error: {error.message}</p>)}

        <hr />
        <p>{`supported languages (${languages.length})`}</p>
        {loading ? (
          <p>loading...</p>
        ) : (
          <>
            {response && languages ? (
              <div>
                <ul>
                  {languages.map((language, i) => (
                    <li key={i}>{language.language}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div><p>no response</p></div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export { App };
