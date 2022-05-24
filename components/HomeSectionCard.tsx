import { Button, Center, Flex, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import NextLink from "next/link";
import { CardContainer, CardDescription, CardHeading } from "components/Card";

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
            <CardHeading>
              {emoji ? `${emoji} ` : null}
              {title}
            </CardHeading>
            <CardDescription>{body}</CardDescription>
          </Flex>
          <Button mt={4} rightIcon={<FaArrowRight />}>
            {buttonText}
          </Button>
        </CardContainer>
      </Center>
    </NextLink>
  );
}
