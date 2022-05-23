import {
  Box,
  Button,
  Center,
  Heading,
  Link as ChakraLink,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

export type CardProps = {
  href: string;
  title: string;
  body: string;
  buttonText: string;
};

export function Card({ href, title, body, buttonText }: CardProps) {
  return (
    <NextLink href={href}>
      <Center py={6} cursor="pointer">
        <Box
          maxW={"445px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          {/* <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image
            src={
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            layout={"fill"}
          />
        </Box> */}
          <Stack>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize="2xl"
              fontFamily="body"
            >
              {title}
            </Heading>
            <Text color="gray.500">{body}</Text>
            <Button>{buttonText}</Button>
          </Stack>
        </Box>
      </Center>
    </NextLink>
  );
}
