import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import PostPreview from "./post-preview";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    passHref,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    passHref?: boolean;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("lib/postRenderers", () => ({
  More: ({ href, className }: { href: string; className?: string }) => (
    <span data-testid="read-more" data-href={href} className={className}>
      Read more
    </span>
  ),
}));

describe("PostPreview", () => {
  it("cleans excerpt text and renders post links", () => {
    // Use a JS string literal (not JSX attribute value) so `&hellip;` remains literal.
    render(<PostPreview title="Test Post" excerpt={"<p>Intro [&hellip;]</p>"} slug="test-post" />);

    const postLink = screen.getByRole("link", { name: /test post/i });
    expect(postLink).toHaveAttribute("href", "/posts/test-post");

    const excerpt = screen.getByText("Intro ...");
    expect(excerpt.tagName.toLowerCase()).toBe("p");

    const readMore = screen.getByTestId("read-more");
    expect(readMore).toHaveAttribute("data-href", "/posts/test-post");
  });

  it("merges className props with defaults", () => {
    render(
      <PostPreview
        title="Styled Post"
        excerpt="No html"
        slug="styled-post"
        className="custom-link"
        cardClassName="custom-card"
      />
    );

    const postLink = screen.getByRole("link", { name: /styled post/i });
    expect(postLink).toHaveClass("flex", "custom-link");

    const article = postLink.querySelector("article");
    expect(article).toHaveClass("custom-card");
  });
});
