import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import Form from ".";
import userEvent from "@testing-library/user-event";

async function typeDesiredStringToInput(input, string) {
  const stringArray = string.split("");
  for (let letter of stringArray) {
    await waitFor(() => userEvent.type(input, letter));
  }
}
describe("Form component", () => {
  // FIELDS TESTS
  // 1. First Name input
  test("should firstNameInput valid if valid value passed", async () => {
    render(<Form />);
    const firstNameInput = screen.getByPlaceholderText(/First name/i);
    await typeDesiredStringToInput(firstNameInput, "John");
    expect(firstNameInput).toBeValid();
  });
  test("should firstNameInput show error message if less than 2 characters passed", async () => {
    render(<Form />);
    const firstNameInput = screen.getByPlaceholderText(/First name/i);
    await waitFor(() => userEvent.type(firstNameInput, "J"));
    expect(
      screen.getByText(/Must be 2 characters or more/i)
    ).toBeInTheDocument();
  });
  test("should firstNameInput show error message if value passed and then clear", async () => {
    render(<Form />);
    const firstNameInput = screen.getByPlaceholderText(/First name/i);
    await waitFor(() => userEvent.type(firstNameInput, "J"));
    await waitFor(() => userEvent.clear(firstNameInput));
    expect(
      screen.getByText(/firstName is a required field/i)
    ).toBeInTheDocument();
  });
  test("should firstNameInput show error message if not letter passed(another symbol) ", async () => {
    render(<Form />);
    const firstNameInput = screen.getByPlaceholderText(/First name/i);
    await typeDesiredStringToInput(firstNameInput, "Jfd22");
    expect(screen.getByText(/Only letters available/i)).toBeInTheDocument();
  });
  // 2. Last Name input
  test("should lastNameInput valid if valid value passed", async () => {
    render(<Form />);
    const lastNameInput = screen.getByPlaceholderText(/Last name/i);
    await typeDesiredStringToInput(lastNameInput, "McKee");
    expect(lastNameInput).toBeValid();
  });
  test("should lastNameInput show error message if less than 2 characters passed", async () => {
    render(<Form />);
    const lastNameInput = screen.getByPlaceholderText(/Last name/i);
    await waitFor(() => userEvent.type(lastNameInput, "J"));
    expect(
      screen.getByText(/Must be 2 characters or more/i)
    ).toBeInTheDocument();
  });
  test("should lastNameInput show error message if value passed and then clear", async () => {
    render(<Form />);
    const lastNameInput = screen.getByPlaceholderText(/Last name/i);
    await waitFor(() => userEvent.type(lastNameInput, "J"));
    await waitFor(() => userEvent.clear(lastNameInput));
    expect(
      screen.getByText(/lastName is a required field/i)
    ).toBeInTheDocument();
  });
  test("should lastNameInput show error message if not letter passed(another symbol) ", async () => {
    render(<Form />);
    const lastNameInput = screen.getByPlaceholderText(/Last name/i);
    await typeDesiredStringToInput(lastNameInput, "Jfd22");
    expect(screen.getByText(/Only letters available/i)).toBeInTheDocument();
  });
  // 3. Email input
  test("should emailInput valid if valid value passed", async () => {
    render(<Form />);
    const emailInput = screen.getByPlaceholderText(/eMail/i);
    await typeDesiredStringToInput(emailInput, "ms@gi.com");
    expect(emailInput).toBeValid();
  });
  test("should emailInput show error message if value passed and then clear", async () => {
    render(<Form />);
    const emailInput = screen.getByPlaceholderText(/eMail/i);
    await waitFor(() => userEvent.type(emailInput, "J"));
    await waitFor(() => userEvent.clear(emailInput));
    expect(screen.getByText(/eMail is a required field/i)).toBeInTheDocument();
  });
  test("should emailInput show error message if not fit to pattern", async () => {
    render(<Form />);
    const emailInput = screen.getByPlaceholderText(/eMail/i);
    await typeDesiredStringToInput(emailInput, "xxx@com");
    expect(screen.getByText(/Invalid email address/i)).toBeInTheDocument();
  });
  // 4. Event date
  test("should eventDateInput valid if valid value passed", async () => {
    render(<Form />);
    const eventDateInput = screen.getByPlaceholderText(/dd.MM.y, HH:mm/i);
    fireEvent.change(eventDateInput, { target: { value: "2021-08-18T14:26" } });
    expect(eventDateInput).toBeValid();
  });
  test("should eventDateInput show error message if value passed and then clear", async () => {
    render(<Form />);
    const eventDateInput = screen.getByPlaceholderText(/dd.MM.y, HH:mm/i);
    fireEvent.change(eventDateInput, { target: { value: "2021-08-18T14:26" } });
    await waitFor(() => userEvent.clear(eventDateInput));
    expect(
      screen.getByText(/eventDate is a required field/i)
    ).toBeInTheDocument();
  });
  // submit call
  // test("should call submit if all fields are correct", async () => {
  //   const handleSubmit = jest.fn((event) => {
  //     event.preventDefault();
  //     Promise.resolve({
  //       email: "john.dee@someemail.com",
  //       firstName: "John",
  //       lastName: "Dee",
  //       eventDate: "2021-08-18T14:26",
  //     });
  //   });
  //   render(<Form />, {});
  //   const form = document.getElementsByTagName("form");
  //   form.onSubmit = handleSubmit;
  //   userEvent.type(screen.getByPlaceholderText(/First name/i), "John");
  //   userEvent.type(screen.getByPlaceholderText(/Last name/i), "Dee");
  //   userEvent.type(
  //     screen.getByPlaceholderText(/eMail/i),
  //     "john.dee@someemail.com"
  //   );
  //   fireEvent.change(screen.getByPlaceholderText(/dd.MM.y, HH:mm/i), {
  //     target: { value: "2021-08-18T14:26" },
  //   });
  //   userEvent.click(screen.getByRole("button", { name: /submit/i }));
  //   await waitFor(() =>
  //     expect(handleSubmit).toHaveBeenCalledWith({
  //       email: "john.dee@someemail.com",
  //       firstName: "John",
  //       lastName: "Dee",
  //       eventDate: "2021-08-18T14:26",
  //     })
  //   );
  // });
});
