import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "components/post-body";
import PostHeader from "components/post-header";
import SectionSeparator from "components/section-separator";
import PostTitle from "components/post-title";
import Tags from "components/tags";

import { getLayout } from "layouts/ArticleLayout";
import { htmlToNodeMap } from "lib/server/htmlToNodeMap";
import { getAllPostsMap, getAllPostSlugs } from "lib/api";

if (!process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL) {
  throw new Error("Missing NEXT_PUBLIC_CLOUDINARY_BASE_URL");
}

export default function PostPage({ post }) {
  const router = useRouter();
  const featuredImage = {
    ...post.featuredImage?.node,
    sourceUrl: `${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}${post.featuredImage?.node.sourceUrl}`,
  };

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article style={{ position: "relative" }}>
            <PostHeader
              title={post.title}
              date={post.date}
              author={post.author}
              categories={post.categories}
              slug={post.slug}
              featuredImage={featuredImage}
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
  const allPostsMap = await getAllPostsMap();
  const post = allPostsMap[params.slug];
  const nodeMap = await htmlToNodeMap(post.content);

  return {
    props: {
      preview,
      post: { ...post, contentMap: nodeMap },
    },
  };
}

export async function getStaticPaths() {
  const allPostSlugs = getAllPostSlugs();

  return {
    paths: allPostSlugs.map((slug) => `/${slug}`) || [],
    fallback: false,
  };
}
