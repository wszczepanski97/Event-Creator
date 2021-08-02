import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import Card from ".";

describe("Card Component", () => {
  test("renders with given name", () => {
    render(<Card title="Title" />);
    const carcComponent = screen.getByText("Title");
    expect(carcComponent).toBeInTheDocument();
  });
});
