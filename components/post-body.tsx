import { rendererMap, DefaultRenderer } from "lib/postRenderers";

export default function PostBody({ content, contentMap }) {
  console.log(`---------------- contentMap `, contentMap);
  return (
    <>
      {contentMap.map((nodeProps, index) => {
        const { tagName, textContent } = nodeProps;
        const tagRenderer = rendererMap[tagName];
        console.log(`---------------- node to render `, nodeProps);
        if (tagRenderer) {
          return rendererMap[tagName]({
            children: textContent,
            key: textContent,
            // ...nodeProps,
          });
        } else {
          DefaultRenderer({ children: textContent });
        }

        // if (nodeProps.children) {

        // }
      })}
    </>
  );
}
