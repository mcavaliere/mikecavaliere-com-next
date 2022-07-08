import { Box, Heading, Text } from "@chakra-ui/react";

export function Heading1({ children, ...props }) {
  return (
    <Heading as="h1" {...props}>
      {children}
    </Heading>
  );
}

export function Heading2({ children, ...props }) {
  return (
    <Heading as="h2" size="lg" fontWeight="normal" {...props}>
      {children}
    </Heading>
  );
}

export function P({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
}
