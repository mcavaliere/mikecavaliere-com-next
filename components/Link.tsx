"use client";

import { default as NextLink } from "next/link";
import { cn } from "@/lib/utils";

export const Link = ({ children, className = "", href, ...props }) => {
  const classNames = cn("underline text-foreground hover:text-primary", className);

  return (
    <NextLink href={href} className={classNames} {...props}>
      {children}
    </NextLink>
  );
};

/**
 * Styled element for links within paragraph content.
 */
export const ParagraphLink = ({ children, href, className = "", ...props }) => {
  const classNames = cn("underline hover:text-primary", className);
  return (
    <Link href={href} className={classNames} {...props}>
      {children}
    </Link>
  );
};

export function TwitterLink({
  children,
  username,
  className = "",

  ...props
}) {
  const classNames = cn("underline font-semibold text-cyan hover:text-primary", className);
  const href = `https://x.com/${username}`;
  if (!children) {
    children = `@${username}`;
  }

  return (
    <NextLink href={href} className={classNames} {...props}>
      {children}
    </NextLink>
  );
}
