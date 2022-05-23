import {
  Button,
  Center,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import NextLink from "next/link";

export type CardProps = {
  href: string;
  title: string;
  body: string;
  buttonText: string;
  emoji?: string;
};

export function HomeSectionCard({
  emoji,
  href,
  title,
  body,
  buttonText,
}: CardProps) {
  return (
    <NextLink href={href}>
      <Center py={6} cursor="pointer" height="100%">
        <Flex
          direction="column"
          justify="space-between"
          flex={1}
          height="100%"
          maxW={"445px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Flex direction="column">
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize="2xl"
              fontFamily="body"
              mb={2}
            >
              {emoji ? `${emoji} ` : null}
              {title}
            </Heading>
            <Text color="gray.500">{body}</Text>
          </Flex>
          <Button mt={4} rightIcon={<FaArrowRight />}>
            {buttonText}
          </Button>
        </Flex>
      </Center>
    </NextLink>
  );
}
