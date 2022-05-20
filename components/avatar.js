import Image from "next/image";
import { Avatar } from "@chakra-ui/react";

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
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4">
        <Avatar name={author.node.name} src={author.node.avatar.url} />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
