import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import { createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { appReducer } from "../redux/reducer";

const store = createStore(appReducer);

function AllTheProviders({
  children,
}: PropsWithChildren<{
  children: React.ReactNode;
}>): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}

const renderWithProviders = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export { renderWithProviders };
