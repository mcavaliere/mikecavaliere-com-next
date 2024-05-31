import type { MDXComponents } from "mdx/types";
import { rendererMapLowercase } from "./lib/postRenderers";
import { AIResourcesTable } from "./components/AIResourcesTable/AIResourcesTable";
import * as headings from "./components/Headings";
import CoverImage from "./components/cover-image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...rendererMapLowercase,
    ...headings,
    CoverImage,
    AIResourcesTable,
  };
}
