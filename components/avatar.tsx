import Image from "next/image";

import { Avatar, Box, Flex } from "@chakra-ui/react";

export default function AvatarContainer({ author }) {
  const name = author
    ? author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name
    : null;

  //   <Image
  //   src={author.node.avatar.url}
  //   layout="fill"
  //   className="rounded-full"
  //   alt={name}
  // />

  return (
    <Box>
      <Box>
        <Avatar name={author.node.name} src={author.node.avatar.url} mr={3} />
      </Box>
      <Box>{name}</Box>
    </Box>
  );
}
