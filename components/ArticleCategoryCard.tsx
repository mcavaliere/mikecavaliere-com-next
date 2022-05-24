import { Button, Center, Flex } from "@chakra-ui/react";
import {
  CardContainer,
  CardCta,
  CardDescription,
  CardHeading,
} from "components/Card";

export type ArticleCategoryCardProps = {
  title: string;
  description: string;
};

export function ArticleCategoryCard({ title, description }) {
  return (
    <Center py={6} cursor="pointer" height="100%">
      <CardContainer>
        <Flex direction="column">
          <CardHeading>{title}</CardHeading>
          <CardDescription>{description}</CardDescription>
        </Flex>
        <CardCta>go</CardCta>
      </CardContainer>
    </Center>
  );
}
