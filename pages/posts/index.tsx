import MoreStories from "components/more-stories";
import { NextPageWithLayout } from "lib/types";
import { getAllPostsForHome } from "lib/api";
import { getLayout } from "layouts/MaxWidthContainerLayout";

export type PostsIndexPageProps = NextPageWithLayout & {
  allPosts: Record<string, any>;
};

export default function PostsIndexPage({
  allPosts: { edges },
}: PostsIndexPageProps) {
  const morePosts = edges;
  return <MoreStories posts={morePosts} />;
}

PostsIndexPage.getLayout = getLayout;

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
  };
}
