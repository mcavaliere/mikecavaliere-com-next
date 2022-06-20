import { rendererMap, DefaultRenderer } from "lib/postRenderers";

export default function PostBody({ content, contentMap }) {
  return (
    <>
      {contentMap.map((nodeProps, index) => {
        const { tagName, textContent } = nodeProps;

        const tagRenderer = rendererMap[tagName];
        if (tagName === "GIST") {
          console.log(
            `---------------- GIST contentmap tagName: `,
            tagName,
            tagRenderer
          );
          console.log(`---------------- nodeProps `, nodeProps);
        }

        if (tagRenderer) {
          return rendererMap[tagName]({
            children: textContent,
            key: textContent,
            ...nodeProps,
          });
        } else {
          DefaultRenderer({ children: textContent });
        }
      })}
    </>
  );
}
