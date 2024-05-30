import { Box } from "@chakra-ui/react";
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
  description:
    "Over the years I've written about software, tech careers, and personal development.",
};

export default async function PostsIndexPage() {
  const allPostsMap = await getAllPostsMap();
  const allPosts = Object.values(allPostsMap);

  return (
    <>
      <Box mb={10} textAlign="center">
        <Heading1 mb={3}>My Articles</Heading1>
        <Heading2 mb={10}>
          Over the years I&#39;ve written about software, tech careers, and personal development.
        </Heading2>
      </Box>
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
