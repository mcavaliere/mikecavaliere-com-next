import { Heading, Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { ContactLinks } from "components/ContactLinks";

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
            priority
          />
        </Box>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        width={{ base: "100%", md: "50%" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Heading>Hi, I'm Mike Cavaliere.</Heading>
        <Heading as="h2" size="md" fontWeight="normal">
          I'm a <strong>technical strategist</strong>,{" "}
          <strong>software engineer</strong>, <strong>presenter</strong>,{" "}
          <strong>author</strong> and <strong>brain hacker</strong>.
        </Heading>

        <ContactLinks />
      </Flex>
    </Flex>
  );
}
