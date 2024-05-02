import {
  Box,
  Center,
  Image as ChakraImage,
  SimpleGrid,
} from "@chakra-ui/react";
import { Heading1, P } from "components/Headings";
import { ContactLinks } from "components/ContactLinks";
import { ParagraphLink } from "components/Link";

export default function AboutPage() {
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
        <ChakraImage
          src="/images/mike-cavaliere-in-office.jpg"
          borderRadius={10}
          overflow="hidden"
          width="100%"
          boxShadow="2xl"
        />

        <Box paddingLeft={10}>
          <Heading1
            mb={1}
            pos="relative"
            _before={{ content: '"👋🏼"', position: "absolute", left: "-40px" }}
          >
            Hi, I&#39;m Mike.
          </Heading1>
          <P mb={5}>
            I started playing with computers when I was a kid, and never
            stopped. Since then I&#39;ve written thousands of lines of code, built
            websites and applications galore, and worked with dozens upon dozens
            of bright people in the tech world.
          </P>
          <P mb={5}>
            I&#39;ve been a full-stack software engineer for many years. I&#39;ve also
            managed and mentored others, and continue to do so.
          </P>
          <P mb={5}>
            Somewhere along the way, I discovered that I love to write and
            present. Since then I&#39;ve written dozens of{" "}
            <ParagraphLink href="/posts">articles</ParagraphLink>, been on a
            number of{" "}
            <ParagraphLink href="/talks#interviews">podcasts</ParagraphLink>,
            given a number of{" "}
            <ParagraphLink href="/talks#interviews">talks</ParagraphLink> at
            conferences and meetups, and recently wrote{" "}
            <ParagraphLink href="https://cutintothejamstack.com">
              my first software book
            </ParagraphLink>
            .
          </P>

          <P mb={5}>
            I plan to continue sharing my knowledge, and hope you find it
            useful.
          </P>
        </Box>
      </SimpleGrid>
      <Center>
        <ContactLinks />
      </Center>
    </>
  );
}
