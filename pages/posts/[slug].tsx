import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";

import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Tags from "../../components/tags";
import jsdom from "jsdom";

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
    <Container>
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
    </Container>
  );
}

export type nodeObjType = {
  tagName: string;
  textContent: string | null;
  children: nodeObjType[];
};

export const TAGS_TO_SKIP = ["HTML", "BODY", "HEAD"];

/**
 * Take an HTML node, and return simplified information about it, recursively including its children.
 * @param node {Element}
 * @returns {nodeObjType[]}
 */
export function traverse(node: Element): nodeObjType {
  const nodeObj: nodeObjType = {
    tagName: node.tagName,
    textContent: node.textContent,
    children: [],
  };

  // const children = node.children;
  // for (let i = 0; i < children.length; i++) {
  //   const child = children[i];

  //   nodeObj.children.push(traverse(child));
  // }

  return nodeObj;
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData);
  const dom = new jsdom.JSDOM(data.post.content);

  const nodeIterator = dom.window.document.createNodeIterator(
    dom.window.document.documentElement,
    dom.window.NodeFilter.SHOW_ELEMENT
  );
  let currentNode;

  const nodeMap: nodeObjType[] = [];

  while ((currentNode = nodeIterator.nextNode())) {
    if (TAGS_TO_SKIP.includes(currentNode.tagName)) {
      continue;
    }
    if (currentNode.tagName === "SCRIPT") {
      console.log(`script tag`, currentNode);
    }
    nodeMap.push(traverse(currentNode));
  }

  // // unique tags
  // const tagNames = nodeMap.map((node) => node.tagName);
  // const uniqueTags = [...new Set<string>(tagNames)];

  // console.log(`---------------- uniqueTags `, uniqueTags);

  return {
    props: {
      preview,
      post: { ...data.post, contentMap: nodeMap },
      posts: data.posts,
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
