import jsdom from "jsdom";
import { loadGists } from "lib/server/loadGists";
import { nodeObjType } from "lib/types";
import { isGist } from "lib/utils/gists";

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
  element: Element,
  { gistMap }
): Promise<nodeObjType> {
  const { tagName, textContent, children: childElements } = element;

  const transformedChildren = [];

  for (let i = 0; i < childElements.length; i++) {
    const child = childElements[i];
    transformedChildren.push((await traverse(child, { gistMap })) as never);
  }

  const nodeObj: nodeObjType = {
    tagName,
    textContent,
    children: transformedChildren,
    attributes: attributesFromElement(element),
  };

  // Transformations here.
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
