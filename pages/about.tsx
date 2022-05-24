import NextImage from "next/image";
import { Box, Flex, Image as ChakraImage } from "@chakra-ui/react";
import { getLayout } from "layouts/MaxWidthContainerLayout";
import { Heading1, Heading2, P } from "components/Headings";

export const AVATAR_SIZE = { base: 150, md: 300 };

export default function AboutPage() {
  return (
    <>
      <Box w="100%">
        <Box
          width="30%"
          // bg="teal"
          // height={400}
          pos="relative"
          float="left"
          mr={5}
          // p={3}
          borderRadius={10}
          overflow="hidden"
          boxShadow="2xl"
        >
          <ChakraImage
            src="/images/mike-cavaliere-in-office.jpg"
            width="100%"
            // width="2316"
            // height="2316"
            // layout="fill"
            // objectFit="cover"
          />
        </Box>
        <Box width="100%" pX={4}>
          <Heading1 mb={1}>Mike Cavaliere</Heading1>
          <Heading2 mb={2}>About Me</Heading2>
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
      </Box>
    </>
  );
}

AboutPage.getLayout = getLayout;
