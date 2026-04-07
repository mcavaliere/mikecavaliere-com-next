import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ArticleList } from "./article-list";
import { AIResource } from "./types";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("ArticleList", () => {
  afterEach(cleanup);

  const articles: AIResource[] = [
    {
      name: "React Agent Patterns",
      description: "Practical examples for agentic UI architecture.",
      category: "articles",
      addedOn: "2026-01-01",
      websiteUrl: "https://example.com/react-agent-patterns",
      tags: ["article"],
    },
    {
      name: "LLM Testing Handbook",
      description: "Approaches for evaluating LLM app quality.",
      category: "articles",
      addedOn: "2026-01-02",
      websiteUrl: "https://example.com/llm-testing-handbook",
      tags: ["article", "testing"],
    },
  ];

  it("renders all article names and descriptions", () => {
    render(<ArticleList articles={articles} />);

    expect(screen.getByText("React Agent Patterns")).toBeInTheDocument();
    expect(
      screen.getByText("Practical examples for agentic UI architecture."),
    ).toBeInTheDocument();
    expect(screen.getByText("LLM Testing Handbook")).toBeInTheDocument();
    expect(
      screen.getByText("Approaches for evaluating LLM app quality."),
    ).toBeInTheDocument();
  });

  it("renders each article as an external link", () => {
    render(<ArticleList articles={articles} />);

    const firstLink = screen.getByRole("link", {
      name: /react agent patterns/i,
    });
    const secondLink = screen.getByRole("link", {
      name: /llm testing handbook/i,
    });

    expect(firstLink).toHaveAttribute(
      "href",
      "https://example.com/react-agent-patterns",
    );
    expect(firstLink).toHaveAttribute("target", "_blank");

    expect(secondLink).toHaveAttribute(
      "href",
      "https://example.com/llm-testing-handbook",
    );
    expect(secondLink).toHaveAttribute("target", "_blank");
  });
});
