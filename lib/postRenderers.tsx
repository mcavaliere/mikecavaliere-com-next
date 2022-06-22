import { ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import highlighterTheme from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";
import { Box, Button, Text } from "@chakra-ui/react";
import { theme } from "lib/theme";
import { Heading1, Heading2, P as Paragraph } from "components/Headings";

export type PostRendererProps = {
  children: ReactNode;
  key: string;
  meta?: Record<string, any>;
};

export function Caption({ children }) {
  return (
    <Text fontFamily="Courier" mb={1}>
      {children}
    </Text>
  );
}

export function H1({ children, ...props }) {
  return <Heading1 {...props}>{children}</Heading1>;
}

export function H2({ children, ...props }) {
  return <Heading2 {...props}>{children}</Heading2>;
}

export function Gist({ meta: { gist } }) {
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

export function P({ children, ...props }) {
  return (
    <Paragraph mb={5} {...props}>
      {children}
    </Paragraph>
  );
}

export function More() {
  return (
    <Box justifyContent="flex-end" alignItems="flex-end" textAlign="right">
      <Button size="xs" colorScheme="green">
        read more ⮕
      </Button>
    </Box>
  );
}

export function DefaultRenderer({ children }) {
  return children;
}

export const rendererMap = {
  H1,
  H2,
  P,
  GIST: Gist,
};
