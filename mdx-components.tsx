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
import { TwitterLink } from "./components/Link";
import { PromptPatterns } from "./components/PromptPatterns";

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
  PromptPatterns,
  AINewsletterCard,
  TwitterLink,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    mdxComponents,
  };
}
