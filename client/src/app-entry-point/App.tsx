import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { HomePage } from "../pages/home/HomePage";
import { SavedCyclesPage } from "../pages/saved/SavedCyclesPage";

const App = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />

      <Route path="saved">
        <Route index element={<SavedCyclesPage />} />
      </Route>
    </Route>
  </Routes>
);

export { App };
