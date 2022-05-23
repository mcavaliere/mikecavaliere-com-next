import { Container } from "@chakra-ui/react";

export const HomePageLayout = ({ children }) => (
  <Container
    my={10}
    p={10}
    maxW={{
      base: "100%",
      md: "90%",
      lg: "75%",
    }}
    flex={1}
    flexDirection="column"
  >
    {children}
  </Container>
);

export const getLayout = (page) => <HomePageLayout>{page}</HomePageLayout>;
