import {
  rendererMap,
  DefaultRenderer,
  PostRendererProps,
} from "lib/postRenderers";

export function renderNode(nodeProps) {
  const { tagName, textContent } = nodeProps;
  const rendererProps: PostRendererProps = {
    children: textContent,
    key: textContent,
  };

  const tagRenderer = rendererMap[tagName];

  if (tagName === "GIST") {
    rendererProps.meta = nodeProps.meta;
  }

  if (tagRenderer) {
    return rendererMap[tagName](rendererProps);
  } else {
    return DefaultRenderer({ children: textContent });
  }
}

export default function PostBody({ contentMap }) {
  return <>{contentMap.map(renderNode)}</>;
}
