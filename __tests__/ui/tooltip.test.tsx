/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import { Tooltip } from "@/ui/tooltip";

describe("Tooltip", () => {
  it("renders a Tooltip with label and description", () => {
    render(<Tooltip text="Tooltip text" />);

    expect(screen.getByLabelText("tooltip")).toBeInTheDocument();
    expect(screen.getByText("Tooltip text")).toBeInTheDocument();
  });

  it("disappears when clicked", () => {
    render(<Tooltip text="Tooltip text" />);

    const tooltip = screen.getByLabelText("tooltip");
    expect(tooltip).toBeVisible();

    fireEvent.click(tooltip);
    expect(tooltip).not.toBeVisible();
  });
});
