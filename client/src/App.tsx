// import { useState, useEffect } from "react";
import "./App.css";

function App(): JSX.Element {
  // const [testData, setTestData] = useState(null);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setTestData(data.message));
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Flüsterpost client</p>

        {/* <p>{!testData ? "Loading..." : testData}</p> */}
        <p>it's alive!</p>
      </header>
    </div>
  );
}

export { App };
