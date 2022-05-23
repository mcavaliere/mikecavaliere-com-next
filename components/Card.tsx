import {
  Button,
  Center,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export function CardTitle() {}

export function CardContainer({ children }) {
  return (
    <Flex
      direction="column"
      justify="space-between"
      flex={1}
      height="100%"
      maxW={"445px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"md"}
      p={6}
      overflow={"hidden"}
    >
      {children}
    </Flex>
  );
}

export function CardBody() {}
