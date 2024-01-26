import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./index";

describe("Input Component", () => {
  it("renders an input field", () => {
    render(<Input type="text" placeholder="Enter text" />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe("text");
  });

  it("accepts text input", () => {
    const handleChange = jest.fn();
    render(
      <Input type="text" placeholder="Enter text" onChange={handleChange} />
    );
    const inputElement = screen.getByPlaceholderText("Enter text");
    fireEvent.change(inputElement, { target: { value: "Testing" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(inputElement.value).toBe("Testing");
  });
});
