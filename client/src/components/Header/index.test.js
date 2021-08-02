import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import Header from ".";

describe("Header Component", () => {
  test("renders Events Managment Studio", () => {
    render(<Header />);
    const headerComponent = screen.getByText("Events Managment Studio");
    expect(headerComponent).toBeInTheDocument();
  });
});
