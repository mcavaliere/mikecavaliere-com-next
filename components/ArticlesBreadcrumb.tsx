import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { BreadcrumbLink } from "components/Link";

export const ArticlesBreadcrumb = () => {
  return (
    <Breadcrumb mb={3}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="/articles">Articles</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
