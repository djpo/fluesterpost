import { useState, useEffect } from 'react';
import { useAxios } from './hooks/useAxios';
import './App.css';

const App = () => {
  const [languages, setLanguages] = useState([]);

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
        {loading ? (
          <p>loading...</p>
        ) : (
          <div>
            {error && (<p>error: {error.message}</p>)}

            {response && languages ? (
              <div>
                <h4>{`supported languages (${languages.length})`}</h4>
                <ul>
                  {languages.map((language, i) => (
                    <li key={i}>{language.language}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div><p>no response</p></div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};

export { App };
