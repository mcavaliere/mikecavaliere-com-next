import { Center, Heading, Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export const HERO_AVATAR_SIZES = {
  base: 200,
  md: 200,
  lg: 300,
};

export function HomeHero() {
  return (
    <Flex direction={{ base: "column", md: "row" }} width="100%">
      <Flex width={{ base: "100%", md: "50%" }} align="center" justify="center">
        <Box
          borderRadius={HERO_AVATAR_SIZES}
          overflow="hidden"
          width={HERO_AVATAR_SIZES}
          height={HERO_AVATAR_SIZES}
          pos="relative"
        >
          <Image
            src="/images/mike-cavaliere-headshot.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      </Flex>
      <Flex bg="tomato" width={{ base: "100%", md: "50%" }}>
        text
      </Flex>
    </Flex>
  );
}
