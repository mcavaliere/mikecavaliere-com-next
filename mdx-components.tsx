import type { MDXComponents } from "mdx/types";
import { rendererMapLowercase } from "./lib/postRenderers";
import { AIResourcesTable } from "./components/AIResourcesTable/AIResourcesTable";
import * as headings from "./components/Headings";
import CoverImage from "./components/cover-image";
import { Badge } from "./components/ui/badge";

export const mdxComponents = {
  ...rendererMapLowercase,
  ...headings,
  CoverImage,
  AIResourcesTable,
  Badge,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    mdxComponents,
  };
}
