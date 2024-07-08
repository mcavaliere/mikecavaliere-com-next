import { ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import highlighterTheme from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";
import { Heading1, Heading2, Heading3, Heading4, P as Paragraph } from "components/Headings";
import { Link } from "@/components/Link";
import Image, { ImageProps } from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "./utils";

export type PostRendererProps = {
  children: ReactNode;
  key: string;
  meta?: Record<string, any>;
};

export function A({ children, href, ...props }) {
  return (
    <Link textDecoration="underline" fontWeight="semibold" href={href} {...props}>
      {children}
    </Link>
  );
}

export function Caption({ children }) {
  return <p className="mb-3">{children}</p>;
}

export function H1({ children, ...props }) {
  return (
    <Heading1 mb={5} {...props}>
      {children}
    </Heading1>
  );
}

export function H2({ children, ...props }) {
  return (
    <Heading2 mb={3} {...props}>
      {children}
    </Heading2>
  );
}

export function H3({ children, ...props }) {
  return (
    <Heading3 mb={3} {...props}>
      {children}
    </Heading3>
  );
}

export function H4({ children, ...props }) {
  return (
    <Heading4 mb={3} {...props}>
      {children}
    </Heading4>
  );
}

export function STRONG({ children, ...props }) {
  return (
    <strong className="font-bold inline" {...props}>
      {children}
    </strong>
  );
}

export function OL({ children, ...props }) {
  return (
    <ol className="mb-4" {...props}>
      {children}
    </ol>
  );
}

export function UL({ children, ...props }) {
  return (
    <ul className="mb-4" {...props}>
      {children}
    </ul>
  );
}

export function LI({ children, ...props }) {
  return <li {...props}>{children}</li>;
}

export type CodeComponentProps = JSX.IntrinsicElements["code"] & {
  inline?: boolean;
};

export const CODE = ({ children, ...rest }: CodeComponentProps & { inline: boolean }) => {
  const language = rest.className?.replace(/language-/, "") || "javascript";

  if (!rest.className?.match(/language-/)) {
    return <code className="text-red">{children}</code>;
  }

  return (
    <SyntaxHighlighter language={language} style={highlighterTheme}>
      {children as string | string[]}
    </SyntaxHighlighter>
  );
};

export function P({ children, ...props }) {
  return (
    <div className="mb-4" {...props}>
      {children}
    </div>
  );
}

export function More({ href, className = "" }) {
  return (
    <div className={cn("justify-end items-end text-right", className)}>
      <Button size="sm" variant="default" className="font-bold">
        Read more ⮕
      </Button>
    </div>
  );
}

export function IMAGE(props) {
  return (
    <Image sizes="100vw" style={{ width: "100%", height: "auto" }} {...(props as ImageProps)} />
  );
}

export function DefaultRenderer({ children }) {
  return children;
}

export const rendererMap = {
  A,
  H1,
  H2,
  H3,
  H4,
  P,
  CODE,
  STRONG,
  IMAGE,
  More,
  OL,
  UL,
  LI,
};

export const rendererMapLowercase = Object.keys(rendererMap).reduce((acc, key) => {
  acc[key.toLowerCase()] = rendererMap[key];
  return acc;
}, {});
