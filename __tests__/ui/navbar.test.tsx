/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Navbar } from "@/ui/navbar";

import { usePathname } from "next/navigation";
jest.mock("next/navigation");

describe("Navbar", () => {
  it("accesses pathname", () => {
    render(<Navbar />);
    expect(usePathname).toHaveBeenCalled();
  });

  it("renders a Navbar with 'Flüsterpost' text", () => {
    render(<Navbar />);
    const fluesterpostText = screen.getByText("Flüsterpost");
    expect(fluesterpostText).toBeInTheDocument();
  });
});
