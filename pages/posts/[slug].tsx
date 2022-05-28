import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";

import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Tags from "../../components/tags";
import jsdom from "jsdom";
import { inspect } from "util";

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

            <PostBody content={post.content} />
            <footer>
              {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
            </footer>
          </article>

          <SectionSeparator />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </>
      )}
    </Container>
  );
}

export type nodeObjType = {
  tagName: string;
  textContent: string;
  children: nodeObjType[];
};

export function traverse(node: any): nodeObjType {
  const nodeObj: nodeObjType = {
    tagName: node.tagName,
    textContent: node.textContent,
    children: [],
  };

  const children = node.children;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];

    nodeObj.children.push(traverse(child));
  }

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
    nodeMap.push(traverse(currentNode));
  }

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
