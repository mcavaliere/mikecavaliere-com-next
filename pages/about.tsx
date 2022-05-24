import {
  Box,
  Center,
  Image as ChakraImage,
  SimpleGrid,
} from "@chakra-ui/react";
import { getLayout } from "layouts/MaxWidthContainerLayout";
import { Heading1, Heading2, P } from "components/Headings";
import { ContactLinks } from "components/ContactLinks";

export const AVATAR_SIZE = { base: 150, md: 300 };

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
            Hi, I'm Mike.
          </Heading1>
          <P mb={5}>
            I started playing with computers when I was a kid, and never
            stopped. Since then I've written thousands of lines of code, built
            websites and applications galore, and worked with dozens upon dozens
            of bright people in the tech world.
          </P>
          <P mb={5}>
            I've been a full-stack software engineer for many years. I've also
            managed and mentored others, and continue to do so.
          </P>
          <P mb={5}>
            Somewhere along the way, I discovered that I love to write and
            present. Since then I've written dozens of articles, been on a
            number of podcasts, given talks at conferences and meetups, and
            recently wrote my first software book.
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

AboutPage.getLayout = getLayout;
