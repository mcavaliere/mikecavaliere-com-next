// import { SimpleGrid } from "@chakra-ui/react";

export function CardGrid({ children, ...rest }) {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">{children}</div>
    // <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={8} {...rest}>
    //   {children}
    // </SimpleGrid>
  );
}
