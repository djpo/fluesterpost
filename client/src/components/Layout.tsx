import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = (): JSX.Element => (
  <main className="App">
    <header className="App-header">
      <p>Flüsterpost</p>
    </header>

    <div className="App-body">
      <Outlet />
    </div>
  </main>
);

export { Layout };
