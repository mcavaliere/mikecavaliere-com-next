import { HStack, ButtonGroup, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export function ContactLinks() {
  return (
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
  );
}
