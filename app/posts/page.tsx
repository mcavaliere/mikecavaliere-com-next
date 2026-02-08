import { NextPageWithLayout } from "lib/types";
import { getAllPostsMap } from "lib/api";
import type { Metadata } from "next";

import { Heading1, Heading2 } from "components/headings";
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

  // Sort descending by date
  const allPosts = Object.values(allPostsMap).sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <>
      <Heading1 className="text-center my-10">My Articles</Heading1>
      <Heading2 className="text-center mb-20 font-normal">
        Articles about software development, and whatever tech I&#39;m using currently.
      </Heading2>

      <div className="flex flex-col gap-3 md:gap-4">
        <div className="shadow" />
        {allPosts.map(({ slug, title, featuredImage, excerpt }) => (
          <PostPreview
            key={slug}
            title={title}
            coverImage={featuredImage}
            slug={slug}
            excerpt={excerpt}
            className="w-full"
            cardClassName="w-full sm:w-full xl:w-full"
          />
        ))}
      </div>
    </>
  );
}
