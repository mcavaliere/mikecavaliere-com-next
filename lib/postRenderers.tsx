import { ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import highlighterTheme from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";
import { Box, Button, Text, UnorderedList, OrderedList, ListItem } from "@chakra-ui/react";
import NextLink from "next/link";
import { theme } from "lib/theme";
import { Heading1, Heading2, Heading3, Heading4, P as Paragraph } from "components/Headings";
import { Link } from "@/components/Link";
import Image, { ImageProps } from "next/image";

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
  return <Text mb={1}>{children}</Text>;
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
    <Text fontWeight="bold" display="inline" {...props}>
      {children}
    </Text>
  );
}

export function OL({ children, ...props }) {
  return (
    <OrderedList mb={5} {...props}>
      {children}
    </OrderedList>
  );
}

export function UL({ children, ...props }) {
  return (
    <UnorderedList mb={5} {...props}>
      {children}
    </UnorderedList>
  );
}

export function LI({ children, ...props }) {
  return <ListItem {...props}>{children}</ListItem>;
}

export function GIST({ meta: { gist } }) {
  return (
    <>
      {gist.files.map(({ name, text }) => (
        <Box key={name} mb={5}>
          <Box
            borderRadius={10}
            key={name}
            overflow="hidden"
            p={4}
            border={`1px solid ${theme.colors.gray["300"]}`}
          >
            <Caption>{name}</Caption>
            <SyntaxHighlighter
              style={highlighterTheme}
              language={(gist?.language?.name || "javascript").toLowerCase()}
            >
              {text}
            </SyntaxHighlighter>
          </Box>
        </Box>
      ))}
    </>
  );
}

export type CodeComponentProps = JSX.IntrinsicElements["code"] & {
  inline?: boolean;
};

export const CODE = ({ children, ...rest }: CodeComponentProps & { inline: boolean }) => {
  const language = rest.className?.replace(/language-/, "") || "javascript";

  if (!rest.inline) {
    return (
      <Box mb={4}>
        <SyntaxHighlighter language={language} style={highlighterTheme}>
          {children}
        </SyntaxHighlighter>
      </Box>
    );
  }

  return (
    <Text as="code" color="brand.red">
      {children}
    </Text>
  );
};

export function P({ children, ...props }) {
  // NOTE: using <Text as="div"> instead of <Paragraph> fixes a Next.js hydration mismatch error.
  // TODO: find a better resolution that uses the right tags.
  return (
    <Text as="div" mb={5} {...props}>
      {children}
    </Text>
  );
}

export function More({ href }) {
  return (
    <Box justifyContent="flex-end" alignItems="flex-end" textAlign="right">
      <NextLink passHref href={href}>
        <Button size="xs" variant="primary">
          read more ⮕
        </Button>
      </NextLink>
    </Box>
  );
}

export function IMAGE(props) {
  console.log(`---------------- IMAGE:  `, props);
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
  GIST,
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