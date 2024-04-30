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
    <Flex direction={{ base: "column", md: "row" }} width="100%" mb={10}>
      <Flex width={{ base: "100%", md: "50%" }} align="center" justify="center">
        <Box
          borderRadius={HERO_AVATAR_SIZES}
          overflow="hidden"
          width={HERO_AVATAR_SIZES}
          height={HERO_AVATAR_SIZES}
          pos="relative"
          // Outer container has the gradient.
          bgGradient="linear(to-br, aqua.500, purple.550, purple.300)"
        >
          <Box
            borderRadius={HERO_AVATAR_SIZES}
            width={HERO_AVATAR_SIZES}
            height={HERO_AVATAR_SIZES}
            overflow="hidden"
            // Inner container uses a transparent border to make the gradient show around the image.
            border="solid 10px transparent"
            pos="relative"
          >
            <Image
              src="/images/headshot 1024 square 72DPI.jpeg"
              priority
              alt="photo of Mike Cavaliere"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center"
              }} />
          </Box>
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
          <strong>author</strong> and <strong>presenter</strong>.
        </Heading>

        <ContactLinks />
      </Flex>
    </Flex>
  );
}
