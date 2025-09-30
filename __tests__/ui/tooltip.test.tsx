/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
// import "@testing-library/user-event";
import { fireEvent, getByText } from "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import { Tooltip } from "@/ui/tooltip";

describe("Tooltip", () => {
  it("renders a Tooltip with label and description", () => {
    render(<Tooltip labelText="labelia" descriptionText="deskriptia" />);

    const tooltip = screen.getByLabelText("tooltip");
    expect(tooltip).toBeInTheDocument();

    const labelText = screen.getByText("labelia");
    expect(labelText).toBeInTheDocument();
    const descriptionText = screen.getByText("deskriptia");
    expect(descriptionText).toBeInTheDocument();
  });
  it("renders a Tooltip with red border", () => {
    const { container } = render(
      <Tooltip labelText="labelia" descriptionText="deskriptia" />
    );
    expect(container).toHaveStyle({ backgroundColor: "cyan" });
  });
  it("renders label text in blue", () => {
    const { container } = render(
      <Tooltip labelText="labelia" descriptionText="deskriptia" />
    );

    expect(getByText(container, "labelia")).toHaveStyle({ color: "blue" });
  });

  it("changes color when moused over", () => {
    // render(<Tooltip labelText="labelia" descriptionText="deskriptia" />);

    const { container } = render(
      <Tooltip labelText="labelia" descriptionText="deskriptia" />
    );

    fireEvent(
      getByText(container, "labelia"),
      new MouseEvent("mouseOver", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(container).toHaveStyle({ backgroundColor: "cyan" });
  });
});
