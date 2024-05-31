import type { MDXComponents } from "mdx/types";
import { rendererMapLowercase } from "./lib/postRenderers";
import { AIResourcesTable } from "./components/AIResourcesTable/AIResourcesTable";
import CoverImage from "./components/cover-image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...rendererMapLowercase,
    CoverImage,
    AIResourcesTable,
  };
}
