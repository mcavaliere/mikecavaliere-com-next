import { useRouter } from "next/router";
import ErrorPage from "next/error";

import PostBody from "components/post-body";
import PostHeader from "components/post-header";
import SectionSeparator from "components/section-separator";
import PostTitle from "components/post-title";
import Tags from "components/tags";

import { getAllPostSlugs, getPostAndMorePosts } from "lib/api";
import { htmlToNodeMap } from "lib/server/htmlToNodeMap";
import { getLayout } from "layouts/ArticleLayout";

export default function PostPage({ post }) {
  console.log(`---------------- PostPage `);
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
  const data = await getPostAndMorePosts(params.slug, preview, previewData);
  const nodeMap = await htmlToNodeMap(data.post.content);

  return {
    props: {
      preview,
      post: { ...data.post, contentMap: nodeMap },
    },
  };
}

export async function getStaticPaths() {
  const allPostSlugs = await getAllPostSlugs();

  return {
    paths: allPostSlugs.map((slug) => `/${slug}`) || [],
    fallback: false,
  };
}
