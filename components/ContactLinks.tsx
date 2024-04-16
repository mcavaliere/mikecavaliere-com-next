import { HStack, ButtonGroup, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export function ContactLinks() {
  return (
    <HStack marginY={10} marginX="auto">
      <ButtonGroup size="sm">
        <IconButton
          size="lg"
          as="a"
          aria-label="Follow me on Twitter"
          icon={<FaTwitter color="#fff" />}
          href="https://twitter.com/mcavaliere"
          target="_blank"
          bg="#2BC2FA"
        />
        <IconButton
          size="lg"
          as="a"
          aria-label="Follow me on LinkedIn"
          icon={<FaLinkedinIn color="#fff" />}
          href="https://www.linkedin.com/in/mikecavaliere"
          target="_blank"
          bg="#0077b5"
        />
        <IconButton
          size="lg"
          as="a"
          aria-label="Follow me on GitHub"
          icon={<FaGithub color="#fff" />}
          href="https://github.com/mcavaliere"
          target="_blank"
          bg="#24292e"
        />
      </ButtonGroup>
    </HStack>
  );
}
