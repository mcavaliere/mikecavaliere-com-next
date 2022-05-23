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
import { CardContainer } from "components/Card";

export type HomeSectionCardProps = {
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
}: HomeSectionCardProps) {
  return (
    <NextLink href={href}>
      <Center py={6} cursor="pointer" height="100%">
        <CardContainer>
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
        </CardContainer>
      </Center>
    </NextLink>
  );
}
