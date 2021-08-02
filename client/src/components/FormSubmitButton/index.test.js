import { render, screen } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import FormSubmitButton from ".";
(".");

describe("Submit Button Component", () => {
  test("appears", () => {
    render(<FormSubmitButton />);
    const submitButtonComponent = screen.getByRole("button");
    expect(submitButtonComponent).toBeInTheDocument();
  });
  test("being submit button", () => {
    render(<FormSubmitButton />);
    const submitButtonComponent = screen.getByRole("button");
    expect(submitButtonComponent).toHaveAttribute("type", "submit");
  });
  test("being disabled", () => {
    render(<FormSubmitButton disabled="disabled" />);
    const submitButtonComponent = screen.getByRole("button");
    expect(submitButtonComponent).toBeDisabled();
  });
  test("being not disabled", () => {
    render(<FormSubmitButton />);
    const submitButtonComponent = screen.getByRole("button");
    expect(submitButtonComponent).not.toBeDisabled();
  });
});
