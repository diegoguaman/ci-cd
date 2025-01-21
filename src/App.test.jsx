import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("increment and decrement buttons work", () => {
  render(<App />);

  const incrementButton = screen.getByText("+");
  const decrementButton = screen.getByText("-");
  const counterText = screen.getByText(/El valor actual es:/);

  fireEvent.click(incrementButton);
  expect(counterText).toHaveTextContent("1");

  fireEvent.click(decrementButton);
  expect(counterText).toHaveTextContent("0");
});
