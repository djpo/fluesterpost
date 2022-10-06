import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [testData, setTestData] = useState(null);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setTestData(data.message));
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Flüsterpost client</p>

        <p>{!testData ? "Loading..." : testData}</p>
      </header>
    </div>
  );
}

export default App;
