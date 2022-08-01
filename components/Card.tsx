import { ReactNode } from "react";
import {
  Button,
  Box,
  Flex,
  FlexProps,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import NextLink from "next/link";
import { isExternalUrl } from "lib/utils/isExternalUrl";

export function CardHeading({ children, ...props }) {
  return (
    <Heading
      color={useColorModeValue("gray.700", "white")}
      fontSize="2xl"
      fontFamily="body"
      mb={2}
      {...props}
    >
      {children}
    </Heading>
  );
}

export function CardDescription({ children, ...props }) {
  return (
    <Text color="gray.500" {...props}>
      {children}
    </Text>
  );
}

export type CardCtaProps = {
  children: ReactNode;
  rightIcon?: ReactNode;
};

export function CardCta({
  children,
  rightIcon = <FaArrowRight />,
  ...props
}): JSX.Element {
  return (
    <Button mt={4} rightIcon={rightIcon} {...props}>
      {children}
    </Button>
  );
}

export type CardContainerProps = FlexProps & {
  children: ReactNode;
  href?: string;
};

/**
 * Card border, optionally linkable.
 * Detects whether the href is an external URL and adds a target="_blank".
 */
export function CardContainer({ children, ...props }) {
  const href = props.href;
  const innerContainer = (
    <Flex
      bg={useColorModeValue("white", "gray.900")}
      boxShadow="2xl"
      direction="column"
      flex={1}
      height="100%"
      justify="space-between"
      maxW={{ base: "100%", md: "445px" }}
      overflow="hidden"
      p={6}
      rounded="md"
      w="full"
      {...props}
    >
      {children}
    </Flex>
  );

  if (href) {
    // External urls get wrapped with a generic link.
    if (isExternalUrl(href)) {
      return (
        <a href={href} target="_blank" rel="noreferrer">
          {innerContainer}
        </a>
      );
    }

    // Internal urls use the next/link component for speed.
    return <NextLink href={href}>{innerContainer}</NextLink>;
  }

  return innerContainer;
}

export function CardBody({ children, ...rest }) {
  return (
    <Box p={6} {...rest}>
      {children}
    </Box>
  );
}
