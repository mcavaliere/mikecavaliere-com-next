import { Heading, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { ContactLinks } from "components/ContactLinks";

export const HERO_AVATAR_SIZES = {
  base: 200,
  md: 200,
  lg: 300,
};

export function HomeHero() {
  return (
    <div className="flex flex-col md:flex-row w-full mb-10">
      <div className="flex w-full md:w-1/2 justify-center items-center">
        <div className="relative rounded-full overflow-hidden w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] bg-gradient-to-br from-[rgb(63,200,241)] via-[rgb(54,53,212)] to-[rgb(128,91,235)]">
          <div className="relative rounded-full overflow-hidden w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] border-[10px] border-transparent ">
            <Image
              src="/images/headshot 1024 square 72DPI.jpeg"
              priority
              alt="photo of Mike Cavaliere"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
      <Flex
        direction="column"
        justify="center"
        width={{ base: "100%", md: "50%" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Heading>Hi, I&#39;m Mike Cavaliere.</Heading>
        <Heading as="h2" size="md" fontWeight="normal">
          I&#39;m a <strong>technical strategist</strong>, <strong>software engineer</strong>,{" "}
          <strong>author</strong> and <strong>conference speaker</strong>.
        </Heading>

        <ContactLinks />
      </Flex>
    </div>
  );
}
