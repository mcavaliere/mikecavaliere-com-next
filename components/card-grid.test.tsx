import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { CardGrid } from "./card-grid";

describe("CardGrid", () => {
  afterEach(cleanup);

  it("renders children", () => {
    render(
      <CardGrid>
        <span>Card 1</span>
      </CardGrid>,
    );

    expect(screen.getByText("Card 1")).toBeInTheDocument();
  });

  it("applies default grid classes", () => {
    render(
      <CardGrid>
        <span>Card 1</span>
      </CardGrid>,
    );

    const child = screen.getByText("Card 1");
    const grid = child.parentElement;

    expect(grid).toHaveClass("flex");
    expect(grid).toHaveClass("flex-row");
    expect(grid).toHaveClass("flex-wrap");
    expect(grid).toHaveClass("justify-center");
    expect(grid).toHaveClass("gap-8");
    expect(grid).toHaveClass("w-full");
  });

  it("merges custom className", () => {
    render(
      <CardGrid className="custom-class">
        <span>Card 1</span>
      </CardGrid>,
    );

    const child = screen.getByText("Card 1");
    const grid = child.parentElement;

    expect(grid).toHaveClass("custom-class");
    expect(grid).toHaveClass("flex");
  });
});
