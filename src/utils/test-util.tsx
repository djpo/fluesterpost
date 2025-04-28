import React, { PropsWithChildren } from "react";
import type { JSX } from "react";
import { render } from "@testing-library/react";
import { createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { appReducer } from "../redux/reducer";

const store = createStore(appReducer);

const AllTheProviders = ({
  children,
}: PropsWithChildren<{
  children: React.ReactNode;
}>): JSX.Element => <Provider store={store}>{children}</Provider>;

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const renderWithProviders = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export { renderWithProviders };
