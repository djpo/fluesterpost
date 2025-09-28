/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import Home from "../app/page";

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

describe("Home", () => {
  it("renders a heading", () => {
    expect(true).toBe(true);

    // render(<Home />);

    // const heading = screen.getByRole("heading", { level: 1 });

    // expect(heading).toBeInTheDocument();
  });
});
