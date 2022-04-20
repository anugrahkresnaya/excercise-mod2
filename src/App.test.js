import { render, screen } from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom';

describe("App", () => {
  test("should have render gif images", () => {
    render(<App />);

    const gifImage = screen.getByTestId("gif");

    expect(gifImage).toBeInTheDocument();
  })
});
