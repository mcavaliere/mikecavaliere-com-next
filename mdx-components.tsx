import type { MDXComponents } from "mdx/types";
import { rendererMap } from "./lib/postRenderers";

const rendererMapLowercase = Object.keys(rendererMap).reduce((acc, key) => {
  acc[key.toLowerCase()] = rendererMap[key];
  return acc;
}, {});

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...rendererMapLowercase,
  };
}
