import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";
import "@testing-library/jest-dom";

function renderNavbar(initialRoute = "/home") {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <Navbar />
    </MemoryRouter>
  );
}

describe("Navbar", () => {
  it("renders logo", () => {
    renderNavbar();
    expect(screen.getByAltText(/mainstack logo/i)).toBeInTheDocument();
  });

  it("renders all navigation menu items", () => {
    renderNavbar();
    const menuNames = ["Home", "Analytics", "Revenue", "CRM", "Apps"];

    menuNames.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it("highlights the active route", () => {
    renderNavbar("/analytics");

    const analyticsLink = screen.getByText("Analytics").closest("a");
    expect(analyticsLink).toHaveClass("active");
  });

  it("toggles menu when hamburger is clicked", () => {
    renderNavbar();

    const hamburger = screen.getByLabelText("Toggle menu");
    const nav = screen.getByRole("navigation");

    expect(nav.classList.contains("open")).toBe(false);

    fireEvent.click(hamburger);
    expect(nav.classList.contains("open")).toBe(true);

    fireEvent.click(hamburger);
    expect(nav.classList.contains("open")).toBe(false);
  });
});
