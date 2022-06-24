import jsdom from "jsdom";
import { loadGists } from "lib/server/loadGists";
import { nodeObjType } from "lib/types";
import { isGist } from "lib/utils/gists";

const NODE_TYPES_TO_SKIP = ["#comment", "SCRIPT"];

export async function htmlToNodeMap(html: string): Promise<nodeObjType[]> {
  const gistMap = await loadGists();

  // Get DOM representation of post HTML.
  const dom = new jsdom.JSDOM(html);
  const body = dom.window.document.getElementsByTagName("BODY")[0];

  // Transform all nodes into object hierarchy, transformed into the metadata we want.
  return (await traverse(body, { gistMap })).children;
}

/**
 * Take an HTML node, and return simplified information about it, recursively including its children.
 *
 * @param node {Element}
 * @returns {nodeObjType[]}
 */
export async function traverse(
  element: ChildNode,
  { gistMap }
): Promise<nodeObjType> {
  const { nodeName: tagName, textContent, childNodes: childElements } = element;
  console.log(`---------------- nodeName:  `, tagName);
  console.log(`----------------------  textContent:  `, textContent);

  const transformedChildren = [];

  for (let i = 0; i < childElements?.length || 0; i++) {
    const child = childElements[i];

    // Skip blacklisted tags.
    if (NODE_TYPES_TO_SKIP.includes(child.nodeName)) {
      continue;
    }

    // Skip text nodes that just have a newline in them.
    if (child.nodeName === "#text" && child.textContent === "\n") {
      console.log(`---------------- NEWLINE, SKIPPING `);
      continue;
    }

    transformedChildren.push((await traverse(child, { gistMap })) as never);
  }

  const nodeObj: nodeObjType = {
    tagName,
    children: transformedChildren,
    // attributes: attributesFromElement(element),
  };

  // Save text ONLY from actual text nodes.
  if (tagName === "#text" && textContent !== null) {
    nodeObj.text = textContent;
  }

  // Add transformations here for specific element types.
  if (textContent && isGist(textContent)) {
    // Gist urls in wordpress have the username in them, but the API returns them without it.
    // Strip it to get a url in the form https://api.github.com/:id.
    const key = textContent.replace(/\/mcavaliere/, "");

    const gist = gistMap[key];

    nodeObj.tagName = "GIST";
    nodeObj.meta = { gist };
  }

  return nodeObj;
}

/**
 * Transform HTMLElement attributes into a key/value object.
 */
export function attributesFromElement(element: Element): Record<string, any> {
  const map = {};
  const attributes = element.attributes;
  for (let i = 0; i < attributes.length; i++) {
    const { name, value } = attributes[i];
    map[name] = value;
  }

  return map;
}
