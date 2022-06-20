import { useRouter } from "next/router";
import ErrorPage from "next/error";

import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";

import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Tags from "../../components/tags";
import jsdom from "jsdom";
import { gistIdFromUrl, isGist } from "lib/utils/gists";

export default function PostPage({ post, posts, preview }) {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  {
    /*
  <Head>
               <title>
                {post.title} | Next.js Blog Example with {CMS_NAME}
              </title>

              <meta
                property="og:image"
                content={post.featuredImage?.node.sourceUrl}
              />
            </Head>
            */
  }

  return (
    <>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <PostHeader
              title={post.title}
              coverImage={post.featuredImage.node}
              date={post.date}
              author={post.author}
              categories={post.categories}
              slug={post.slug}
            />

            <PostBody content={post.content} contentMap={post.contentMap} />
            <footer>
              {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
            </footer>
          </article>

          <SectionSeparator />
          {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        </>
      )}
    </>
  );
}

export type nodeObjType = {
  tagName: string;
  textContent: string | null;
  children: nodeObjType[];
  meta?: Record<string, any>;
  attributes: Record<string, any>;
};

export const TAGS_TO_SKIP = ["HTML", "BODY", "HEAD"];

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

/**
 * Take an HTML node, and return simplified information about it, recursively including its children.
 * @param node {Element}
 * @returns {nodeObjType[]}
 */
export async function traverse(element: Element): Promise<nodeObjType> {
  const { tagName, textContent, children: childElements } = element;

  const transformedChildren = [];

  for (let i = 0; i < childElements.length; i++) {
    const child = childElements[i];
    transformedChildren.push((await traverse(child)) as never);
  }

  const nodeObj: nodeObjType = {
    tagName,
    textContent,
    children: transformedChildren,
    attributes: attributesFromElement(element),
  };

  // Transformations here.
  if (isGist(textContent)) {
    console.log(`---- it's a gist!`);

    const gistId = gistIdFromUrl(textContent);
    const gistResponse = await fetch(`https://api.github.com/gists/${gistId}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.github.v3+json",
        Authorization: `Basic ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    });
    const gist = await gistResponse.json();

    nodeObj.tagName = "GIST";
    nodeObj.meta = { gist };
  }

  return nodeObj;
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData);

  // Get DOM representation of post HTML.
  const dom = new jsdom.JSDOM(data.post.content);
  const body = dom.window.document.getElementsByTagName("BODY")[0];
  // Transform all nodes into object hierarchy, transformed into the metadata we want.
  const nodeMap: nodeObjType[] = (await traverse(body)).children;

  return {
    props: {
      preview,
      post: { ...data.post, contentMap: nodeMap },
      // posts: data.posts,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
}
