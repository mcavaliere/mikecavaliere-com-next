import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { BackLink } from "./BackLink";

vi.mock("@/components/Link", () => ({
  Link: ({
    children,
    href,
    className,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
    [key: string]: unknown;
  }) => (
    <a href={href} className={className} data-testid="back-link" {...props}>
      {children}
    </a>
  ),
}));

describe("BackLink", () => {
  afterEach(cleanup);

  it("renders a link with the given href", () => {
    render(<BackLink href="/posts" />);
    const link = screen.getByTestId("back-link");
    expect(link).toHaveAttribute("href", "/posts");
  });

  it("renders Back text", () => {
    render(<BackLink href="/posts" />);
    expect(screen.getByText("Back")).toBeInTheDocument();
  });

  it("merges custom className with default styles", () => {
    render(<BackLink href="/posts" className="custom-class" />);
    const link = screen.getByTestId("back-link");
    expect(link).toHaveClass("custom-class");
  });

  it("forwards extra props to the link", () => {
    render(<BackLink href="/posts" data-foo="bar" />);
    const link = screen.getByTestId("back-link");
    expect(link).toHaveAttribute("data-foo", "bar");
  });
});
