import { Box, Heading, Text } from "@chakra-ui/react";

export function Heading1({ children, ...props }) {
  return (
    <Heading as="h1" fontWeight="bold" {...props}>
      {children}
    </Heading>
  );
}

export function Heading2({ children, ...props }) {
  return (
    <Heading as="h2" size="lg" fontWeight="bold" {...props}>
      {children}
    </Heading>
  );
}

export function Heading3({ children, ...props }) {
  return (
    <Heading as="h3" size="md" fontWeight="bold" {...props}>
      {children}
    </Heading>
  );
}

export function Heading4({ children, ...props }) {
  return (
    <Heading as="h4" size="md" fontWeight="normal" {...props}>
      {children}
    </Heading>
  );
}

export function P({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
}
