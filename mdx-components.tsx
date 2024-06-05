import type { MDXComponents } from "mdx/types";
import { rendererMapLowercase } from "./lib/postRenderers";
import { AIResourcesTable } from "./components/AIResourcesTable/AIResourcesTable";
import * as headings from "./components/Headings";
import CoverImage from "./components/cover-image";
import { Badge } from "./components/ui/badge";
import {
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
  CardContent,
  CardDescription,
  AINewsletterCard,
} from "./components/ui/card";

export const mdxComponents = {
  ...rendererMapLowercase,
  ...headings,
  CoverImage,
  AIResourcesTable,
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  AINewsletterCard,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    mdxComponents,
  };
}
