import { NextPageWithLayout } from "lib/types";
import { getAllPostsMap } from "lib/api";
import type { Metadata } from "next";

import { Heading1, Heading2 } from "components/Headings";
import { CardGrid } from "@/components/CardGrid";
import PostPreview from "@/components/post-preview";

export type PostsIndexPageProps = NextPageWithLayout & {
  allPosts: Record<string, any>;
};

export const metadata: Metadata = {
  title: "Mike Cavaliere's articles on JavaScript, React, technical strategy, and brain hacking.",
  description: "Articles on software development.",
};

export default async function PostsIndexPage() {
  const allPostsMap = await getAllPostsMap();
  const allPosts = Object.values(allPostsMap);

  return (
    <>
      <div className="mb-2.5 text-center">
        <Heading1 className="mb-4">My Articles</Heading1>
        <Heading2 className="mb-10">
          Articles about software development, and whatever tech I&#39;m using currently.
        </Heading2>
      </div>
      <CardGrid>
        {allPosts.map(({ slug, title, featuredImage, excerpt }) => (
          <PostPreview
            key={slug}
            title={title}
            coverImage={featuredImage}
            slug={slug}
            excerpt={excerpt}
          />
        ))}
      </CardGrid>
    </>
  );
}
