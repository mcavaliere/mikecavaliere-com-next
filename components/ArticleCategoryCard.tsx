import { Flex } from "@chakra-ui/react";
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
  // Make description fill more space if there's no CTA.
  const descriptionProps =
    !ctaText || !ctaHref
      ? {
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
        }
      : {};

  return (
    <CardContainer href={ctaHref} minHeight={{ base: 0, md: 200 }}>
      <Flex direction="column" justify="space-between" flex={1}>
        <CardHeading textAlign="center">{title}</CardHeading>
        <CardDescription textAlign="center" {...descriptionProps}>
          {description}
        </CardDescription>

        {ctaText && ctaHref ? <CardCta>{ctaText}</CardCta> : null}
      </Flex>
    </CardContainer>
  );
}
