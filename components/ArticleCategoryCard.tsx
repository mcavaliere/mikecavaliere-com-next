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
  ctaText?: string;
  ctaHref?: string;
};

export function ArticleCategoryCard({
  title,
  description,
  ctaText,
  ctaHref,
}: ArticleCategoryCardProps) {
  return (
    <CardContainer href={ctaHref}>
      <Flex direction="column">
        <CardHeading>{title}</CardHeading>
        <CardDescription>{description}</CardDescription>
      </Flex>
      {ctaText && ctaHref ? <CardCta>{ctaText}</CardCta> : null}
    </CardContainer>
  );
}
