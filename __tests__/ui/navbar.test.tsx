/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Navbar } from "@/ui/navbar";

// import { usePathname } from "next/navigation";
// jest.mock("next/navigation", () => ({
//   usePathname: () => "localhost:3000/",
// }));

import { usePathname } from "next/navigation";
jest.mock("next/navigation");
// (usePathname as jest.Mock).mockReturnValue("fluesterpost.poppe.club/");

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

  // it("renders a Navbar with 'Home' link when path is not '/'", () => {
  //   render(<Navbar />);
  //   const homeLink = screen.getByRole("link");
  //   expect(homeLink).toHaveTextContent("Home");
  // });

  // it("renders a Navbar with 'Home' link when path is 'saved'", () => {
  //   render(<Navbar />);
  //   const anyLink = screen.getByRole("link");
  //   expect(anyLink).toHaveTextContent("Home");
  //   const savedButton = screen.getByText("Home");
  //   expect(savedButton).toBeInTheDocument();
  // });

  // it("renders a Navbar with 'Saved' link when path is '/'", () => {
  //   render(<Navbar />);

  //   const anyLink = screen.getByRole("link");
  //   expect(anyLink).toHaveTextContent("Saved");

  //   const savedButton = screen.getByText("Saved");
  //   expect(savedButton).toBeInTheDocument();
  // });
});
