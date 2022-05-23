import {
  Heading,
  HStack,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
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

        <HStack marginY={10} marginX="auto">
          <ButtonGroup size="sm">
            <IconButton
              as="a"
              aria-label="Follow me on Twitter"
              icon={<FaTwitter />}
              href="https://twitter.com/mcavaliere"
              target="_blank"
            />
            <IconButton
              as="a"
              aria-label="Follow me on LinkedImn"
              icon={<FaLinkedin />}
              href="https://www.linkedin.com/in/mikecavaliere"
              target="_blank"
            />
            <IconButton
              as="a"
              aria-label="Follow me on GitHub"
              icon={<FaGithub />}
              href="https://github.com/mcavaliere"
              target="_blank"
            />
          </ButtonGroup>
        </HStack>
      </Flex>
    </Flex>
  );
}
