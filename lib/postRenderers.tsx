import { Link, Text } from "@chakra-ui/react";
import { Heading1, Heading2, P as Paragraph } from "components/Headings";

export function H1({ children, ...props }) {
  return <Heading1 {...props}>{children}</Heading1>;
}

export function H2({ children, ...props }) {
  return <Heading2 {...props}>{children}</Heading2>;
}

export function P({ children, ...props }) {
  return (
    <Paragraph mb={5} {...props}>
      {children}
    </Paragraph>
  );
}

export function DefaultRenderer({ children }) {
  return children;
}

export const rendererMap = {
  H1,
  H2,
  P,
};
