import { useRouter } from "next/router";
import ErrorPage from "next/error";

import PostBody from "components/post-body";
import PostHeader from "components/post-header";
import SectionSeparator from "components/section-separator";
import PostTitle from "components/post-title";
import Tags from "components/tags";

import { getLayout } from "layouts/ArticleLayout";
import { readFileSync } from "fs";

const appDir = process.cwd();
const POSTS_FILE_PATH = `${appDir}/data/posts.json`;
const NODEMAP_FILE_PATH = `${appDir}/data/postNodeMap.json`;
const POST_PATHS_FILE_PATH = `${appDir}/data/postStaticPaths.json`;

export default function PostPage({ post }) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
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

            <PostBody contentMap={post.contentMap} />
            <footer>
              {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
            </footer>
          </article>

          <SectionSeparator />
        </>
      )}
    </>
  );
}

PostPage.getLayout = getLayout;

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = JSON.parse(readFileSync(POSTS_FILE_PATH, "utf8"));
  const nodeMap = JSON.parse(readFileSync(NODEMAP_FILE_PATH, "utf8"));

  return {
    props: {
      preview,
      post: { ...data.post, contentMap: nodeMap },
    },
  };
}

export async function getStaticPaths() {
  const allPostSlugs = JSON.parse(readFileSync(POST_PATHS_FILE_PATH, "utf8"));

  return {
    paths: allPostSlugs.map((slug) => `/${slug}`) || [],
    fallback: false,
  };
}
