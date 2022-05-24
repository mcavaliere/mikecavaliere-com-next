import { ReactNode } from "react";
import {
  Button,
  Center,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import NextLink from "next/link";
import { isExternalUrl } from "lib/utils/isExternalUrl";

export function CardHeading({ children }) {
  return (
    <Heading
      color={useColorModeValue("gray.700", "white")}
      fontSize="2xl"
      fontFamily="body"
      mb={2}
    >
      {children}
    </Heading>
  );
}

export function CardDescription({ children }) {
  return <Text color="gray.500">{children}</Text>;
}

export type CardCtaProps = {
  children: ReactNode;
  rightIcon?: ReactNode;
};

export function CardCta({
  children,
  rightIcon = <FaArrowRight />,
}): JSX.Element {
  return (
    <Button mt={4} rightIcon={rightIcon}>
      {children}
    </Button>
  );
}

export type CardContainerProps = {
  children: ReactNode;
  href?: string;
};

/**
 * Card border, optionally linkable.
 * Detects whether the href is an external URL and adds a target="_blank".
 */
export function CardContainer({ children, href }) {
  const innerContainer = (
    <Flex
      bg={useColorModeValue("white", "gray.900")}
      boxShadow="2xl"
      direction="column"
      flex={1}
      height="100%"
      justify="space-between"
      maxW="445px"
      overflow="hidden"
      p={6}
      rounded="md"
      w="full"
    >
      {children}
    </Flex>
  );

  console.log(`---------------- href: `, href);

  if (href) {
    const linkContents = (
      <Center py={6} cursor="pointer" height="100%">
        {innerContainer}
      </Center>
    );

    if (isExternalUrl(href)) {
      return (
        <a href={href} target="_blank">
          {linkContents}
        </a>
      );
    }
    return <NextLink href={href}>{linkContents}</NextLink>;
  }

  return innerContainer;
}

export function CardBody() {}
