import type { MDXComponents } from "mdx/types";
import { rendererMapLowercase } from "./lib/postRenderers";



export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...rendererMapLowercase,
  };
}
