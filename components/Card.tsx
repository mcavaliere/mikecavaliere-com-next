import {
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

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
  children: React.ReactNode;
  rightIcon?: React.ReactNode;
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

export function CardContainer({ children }) {
  return (
    <Flex
      direction="column"
      justify="space-between"
      flex={1}
      height="100%"
      maxW="445px"
      w="full"
      bg={useColorModeValue("white", "gray.900")}
      boxShadow="2xl"
      rounded="md"
      p={6}
      overflow="hidden"
    >
      {children}
    </Flex>
  );
}

export function CardBody() {}
