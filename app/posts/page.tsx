import { Box } from "@chakra-ui/react";

import { NextPageWithLayout } from "lib/types";
import { getAllPostsMap } from "lib/api";
import { ArticleCategoryCard } from "components/ArticleCategoryCard";
import type { Metadata } from 'next'
import { CardGrid } from "components/CardGrid";
import MoreStories from "components/more-stories";

import { Heading1, Heading2 } from "components/Headings";

export type PostsIndexPageProps = NextPageWithLayout & {
  allPosts: Record<string, any>;
};

export const metadata: Metadata = {
  title: "Mike Cavaliere's articles on JavaScript, React, technical strategy, and brain hacking.",
  description: "Over the years I've written about software, tech careers, and personal development.",
}


// export const ARTICLE_INDEX_CARDS = [
//   {
//     title: "⚛️ Full-Stack React",
//     description:
//       "I write about React, Next.js and other full-stack Jamstack topics at cutintothejamstack.com.",
//     ctaText: "cutintothejamstack.com",
//     ctaHref: "https://cutintothejamstack.com",
//   },
//   {
//     title: "🛣 Tech Strategy",
//     description: "I've written about various tech topics on the Echobind Blog.",
//     ctaText: "Echobind Blog",
//     ctaHref: "https://echobind.com/team/mike-cavaliere",
//   },
//   {
//     title: "👔 Freelance Programming",
//     description: "Older articles on freelancing as a programmer are below. ",
//   },
// ];

export default async function PostsIndexPage() {
  const allPostsMap = await getAllPostsMap();
  const allPosts = Object.values(allPostsMap);

  return (
    <>
      <Box mb={10} textAlign="center">
        <Heading1 mb={3}>My Articles</Heading1>
        <Heading2 mb={10}>
          Over the years I've written about software, tech careers, and brain improvement.
        </Heading2>

        {/* <CardGrid>
          {ARTICLE_INDEX_CARDS.map(({ title, description, ctaHref, ctaText }) => (
            <ArticleCategoryCard
              key={title}
              title={title}
              description={description}
              ctaText={ctaText}
              ctaHref={ctaHref}
            />
          ))}
        </CardGrid> */}
      </Box>
      <MoreStories posts={allPosts} />
    </>
  );
}
