import { Heading, Box, Flex } from "@chakra-ui/react";

export function HomeHero() {
  return (
    <Flex direction={{ base: "column", md: "row" }} width="100%">
      <Flex bg="teal" width={{ base: "100%", md: "50%" }}>
        image
      </Flex>
      <Flex bg="tomato" width={{ base: "100%", md: "50%" }}>
        text
      </Flex>
    </Flex>
  );
}
