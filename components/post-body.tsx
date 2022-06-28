import { rendererMap, DefaultRenderer } from "lib/postRenderers";
import { nodeObjType } from "lib/types";

/**
 * Recursively determine the right renderer for a single nodeObjType node and render it (and any children).
 * @param nodeProps The custom node to render and traverse.
 * @returns {JSX.Element}
 */
export function renderNode(nodeProps: nodeObjType): JSX.Element | null {
  const { tagName, text, children, meta } = nodeProps;

  if (tagName === "#text") {
    return DefaultRenderer({ children: text });
  }

  const tagRenderer = rendererMap[tagName];

  if (tagName == "GIST") {
    return tagRenderer({ meta });
  }

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
