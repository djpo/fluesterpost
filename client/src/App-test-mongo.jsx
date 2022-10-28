import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(async () => {
    const maxCount = 5;
    const query = `query GetCycles($maxCount: Int) {
      getCycles(last: $maxCount) {
        _id
        originLang
        originText
        steps {
          lang
          text
        }
      }
    }`;
    const res = await fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { maxCount },
      }),
    });
    const parsed = await res.json();
    console.log("API data:", parsed.data.getCycles);
    setApiData(parsed.data.getCycles);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Flüsterpost client</p>

        <p>{!apiData ? "Loading..." : "API data (in console)"}</p>
      </header>
    </div>
  );
}

export { App };
