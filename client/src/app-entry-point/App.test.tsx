import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-util";
import { App } from "./App";

test("renders App with basic elements", () => {
  renderWithProviders(<App />);

  const headerElement = screen.getByText(/Flüsterpost/i);
  expect(headerElement).toBeInTheDocument();

  const instructionsElement = screen.getByText(/see what happens/i);
  expect(instructionsElement).toBeInTheDocument();

  const addStepElement = screen.getByText(/add step/i);
  expect(addStepElement).toBeInTheDocument();
});
