import jsdom from "jsdom";
import { loadGists } from "lib/server/loadGists";
import { nodeObjType } from "lib/types";
import { isGist } from "lib/utils/gists";

const NODE_TYPES_TO_SKIP = ["#comment", "SCRIPT"];

export async function htmlToNodeMap(html: string): Promise<nodeObjType> {
  const gistMap = await loadGists();

  // Get DOM representation of post HTML.
  const dom = new jsdom.JSDOM(html);
  const body = dom.window.document.getElementsByTagName("BODY")[0];

  // Transform all nodes into object hierarchy, transformed into the metadata we want.
  return Promise.resolve(transform(body, { gistMap }) as nodeObjType);
}

export function transformGist({ textContent }: Node, gistMap) {
  // Gist urls in wordpress have the username in them, but the API returns them without it.
  // Strip it to get a url in the form https://api.github.com/:id.
  const key = textContent!.replace(/\/mcavaliere/, "");
  const gist = gistMap[key];

  return {
    tagName: "GIST",
    meta: { gist },
    children: [],
  };
}

export function transformText({ nodeName, textContent }: Node) {
  return {
    tagName: nodeName,
    text: textContent!,
    children: [],
  };
}

/**
 * Return a minimal JS object representing the node.
 * @param node
 */
export function transform(
  { textContent, nodeName, childNodes }: Node,
  { gistMap }
): nodeObjType | undefined {
  // Skip blacklisted tags.
  if (NODE_TYPES_TO_SKIP.includes(nodeName)) {
    return undefined;
  }

  // Skip text nodes that just have a newline in them.
  if (nodeName === "#text" && textContent === "\n") {
    return undefined;
  }

  // Text nodes and Gists are leaf nodes.
  if (nodeName === "#text") {
    return transformText({ textContent, nodeName } as Node);
  }

  // Add transformations here for specific element types.
  if (textContent && isGist(textContent)) {
    return transformGist({ textContent, nodeName } as Node, gistMap);
  }

  const transformedChildNodes: nodeObjType[] = [];

  // Traverse children and recursively transform them.
  childNodes.forEach((childNode) => {
    const transformedChildNode = transform(childNode, { gistMap });
    if (transformedChildNode !== undefined) {
      transformedChildNodes.push(transformedChildNode);
    }
  });

  return {
    tagName: nodeName,
    children: transformedChildNodes,
  };
}
