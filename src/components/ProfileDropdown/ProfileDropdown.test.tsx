import { render, screen } from "@testing-library/react";
import ProfileDropdown from "./ProfileDropdown";
import "@testing-library/jest-dom";

describe("ProfileDropdown", () => {
  beforeEach(() => {
    render(<ProfileDropdown />);
  });

  it("renders user profile initials, name, and email", () => {
    expect(screen.getByText("OJ")).toBeInTheDocument();
    expect(screen.getByText("Olivier Jones")).toBeInTheDocument();
    expect(screen.getByText("olivierjones@gmail.com")).toBeInTheDocument();
  });

  it("renders all dropdown links", () => {
    const links = [
      "Settings",
      "Purchase History",
      "Refer and Earn",
      "Integrations",
      "Report Bug",
      "Switch Account",
      "Sign Out"
    ];

    links.forEach((linkText) => {
      expect(screen.getByText(linkText)).toBeInTheDocument();
    });
  });

  it("renders links as focusable buttons", () => {
    const linkContainers = screen.getAllByRole("button");
    expect(linkContainers.length).toBe(7);

    linkContainers.forEach((link) => {
      expect(link).toHaveAttribute("tabIndex", "0");
    });
  });
});
