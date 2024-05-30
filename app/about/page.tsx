import { Box, Center } from "@chakra-ui/react";
import { Heading1, P } from "components/Headings";
import { ContactLinks } from "components/ContactLinks";
import { ParagraphLink } from "components/Link";
import Image from "next/image";
import photo from "/public/images/mike-cavaliere-in-office.jpg";

export default function AboutPage() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Image
          alt="Mike Cavaliere in his office, smiling at the camera."
          src={photo}
          className="rounded-lg overflow-hidden shadow-2xl"
        />

        <Box paddingLeft={10}>
          <Heading1 className="relative before:content-['👋🏼'] before:absolute before:left-[-40px] mb-3">
            Hi, I&#39;m Mike.
          </Heading1>
          <p className="mb-3 text-lg">
            I started playing with computers when I was a kid, and never stopped. Since then
            I&#39;ve written thousands of lines of code, built websites and applications galore, and
            worked with dozens upon dozens of bright people in the tech world.
          </p>
          <p className="mb-3 text-lg">
            I&#39;ve been a full-stack software engineer for many years. I&#39;ve also managed and
            mentored others, and continue to do so.
          </p>
          <p className="mb-3 text-lg">
            Somewhere along the way, I discovered that I love to write and present. Since then
            I&#39;ve written dozens of <ParagraphLink href="/posts">articles</ParagraphLink>, been
            on a number of <ParagraphLink href="/talks#interviews">podcasts</ParagraphLink>, given a
            number of <ParagraphLink href="/talks#interviews">talks</ParagraphLink> at conferences
            and meetups, and recently wrote{" "}
            <ParagraphLink href="https://cutintothejamstack.com">
              my first software book
            </ParagraphLink>
            .
          </p>

          <p className="mb-3 text-lg">
            I plan to continue sharing my knowledge, and hope you find it useful.
          </p>

          <ContactLinks />
        </Box>
      </div>
    </>
  );
}
