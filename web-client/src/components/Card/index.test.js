import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Card } from "./index";

describe("Card Component", () => {
  const props = {
    image: "test-image.jpg",
    altText: "Test Image",
    title: "Test Title",
    subtitle: "Test Subtitle",
  };

  it("renders the Card component", () => {
    render(<Card {...props} />);
    expect(screen.getByRole("img")).toHaveAttribute("src", props.image);
    expect(screen.getByRole("img")).toHaveAttribute("alt", props.altText);
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.subtitle)).toBeInTheDocument();
  });
});
