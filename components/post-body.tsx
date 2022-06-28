import {
  rendererMap,
  DefaultRenderer,
  PostRendererProps,
} from "lib/postRenderers";
import { nodeObjType } from "lib/types";

export function renderNode(nodeProps: nodeObjType): JSX.Element | null {
  console.log(`---------------- renderNode:  `, nodeProps, rendererMap);
  const { tagName, text, children } = nodeProps;
  // const rendererProps: PostRendererProps = {
  //   children: text,
  //   key: text,
  // };

  if (tagName === "GIST") {
    return null;
    // rendererProps.meta = nodeProps.meta;
  }

  if (tagName === "#text") {
    console.log(`---------------- TEXT, RETURNING DEFAULT RENDERER `);
    return DefaultRenderer({ children: text });
  }

  const tagRenderer = rendererMap[tagName];

  if (!tagRenderer && !children?.length) {
    console.log(`---------------- RETURNING NULL 1 `);
    return null;
  }

  if (tagRenderer) {
    console.log(`---------------- RETURNING TAG RENDERER `);
    const renderedChildren = children.map((node) => renderNode(node));
    return tagRenderer({ children: renderedChildren });
  }

  if (!tagRenderer && children?.length) {
    console.log(`---------------- LAST CASE:  `, tagRenderer, children);
    return <>{children.map((node) => renderNode(node))}</>;
  }

  console.log(`---------------- RETURNING NULL 2`);
  return null;
}

export default function PostBody({ contentMap }) {
  return <>{renderNode(contentMap)}</>;
}
