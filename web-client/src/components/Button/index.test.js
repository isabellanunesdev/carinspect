import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { Button } from "./index";

describe("Button Component", () => {
  it("renders with the correct title", () => {
    const title = "Click Me";
    render(<Button title={title} />);
    expect(screen.getByRole("button")).toHaveTextContent(title);
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button title="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
