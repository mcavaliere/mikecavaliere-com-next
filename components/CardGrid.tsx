import { SimpleGrid } from "@chakra-ui/react";

export function CardGrid({ children }) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={8}>
      {children}
    </SimpleGrid>
  );
}
