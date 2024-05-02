import { Heading } from "@chakra-ui/react";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <Heading as="h1" size="xl">
        Mike Cavaliere
      </Heading>
      <Heading as="h2" size="md" fontWeight="normal">
        I$#39;m a <strong>technical strategist</strong>,{" "}
        <strong>software engineer</strong>, <strong>presenter</strong>,{" "}
        <strong>author</strong> and <strong>brain hacker</strong>.
      </Heading>
    </section>
  );
}
