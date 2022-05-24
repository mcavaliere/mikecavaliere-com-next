import { Button, Center, Flex, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

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
    <CardContainer href={href}>
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
  );
}
