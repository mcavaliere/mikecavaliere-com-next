import { ReactElement } from "react";
import { rendererMap, DefaultRenderer } from "lib/postRenderers";
import { nodeObjType } from "lib/types";

/**
 * Recursively determine the right renderer for a single nodeObjType node and render it (and any children).
 * @param nodeProps The custom node to render and traverse.
 * @returns {ReactElement}
 */
export function renderNode(nodeProps: nodeObjType): ReactElement | null {
  const { tagName, text, children, meta } = nodeProps;

  // Text nodes.
  if (tagName === "#text") {
    return DefaultRenderer({ children: text });
  }

  // Find the renderer by tag name,
  const tagRenderer = rendererMap[tagName];

  // Call the renderer differently for special elements.
  if (tagName == "GIST") {
    return tagRenderer({ meta });
  }

  // Recurse appropriately.
  if (children?.length) {
    const renderedChildren = children.map(renderNode);
    if (tagRenderer) {
      return tagRenderer({ children: renderedChildren, meta });
    }

    return <>{renderedChildren}</>;
  }

  return null;
}

export default function PostBody({ contentMap }) {
  return <>{renderNode(contentMap)}</>;
}
