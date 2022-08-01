import { Container } from "@chakra-ui/react";

export function MaxWidthContainer({ children, ...props }) {
  return (
    <Container
      my={10}
      p={10}
      maxW={{
        base: "100%",
        md: "90%",
        lg: "75%",
        xl: "1400px",
      }}
      flex={1}
      flexDirection="column"
      {...props}
    >
      {children}
    </Container>
  );
}
