import { HStack, Tag, TagLabel, Text } from "@chakra-ui/react";

export default function Categories({ categories }) {
  return categories.edges.length > 0 ? (
    <HStack spacing={4}>
      <>
        {categories.edges.map((category, index) => (
          <Tag key={index}>
            <TagLabel>{category.node.name}</TagLabel>
          </Tag>
        ))}
      </>
    </HStack>
  ) : (
    <span className="ml-1">{categories.edges.node.name}</span>
  );
}
