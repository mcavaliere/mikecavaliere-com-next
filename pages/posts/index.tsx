import { Box, Heading } from "@chakra-ui/react";
import MoreStories from "components/more-stories";
import { NextPageWithLayout } from "lib/types";
import { getAllPostsForHome } from "lib/api";
import { getLayout } from "layouts/MaxWidthContainerLayout";
import { CardGrid } from "components/CardGrid";
import { ArticleCategoryCard } from "components/ArticleCategoryCard";

export type PostsIndexPageProps = NextPageWithLayout & {
  allPosts: Record<string, any>;
};

export const ARTICLE_INDEX_CARDS = [
  {
    title: "🧠 Brain Improvement",
    description:
      "My articles on brain hacking, and on being a programmer with ADHD live on ADHDTechies.com",
    ctaText: "ADHDTechies.com",
    ctaHref: "https://adhdtechies.com",
  },
  {
    title: "⚛️ Full-Stack React",
    description:
      "I write about React, Next.js and other full-stack Jamstack topics at cutintothejamstack.com.",
    ctaText: "cutintothejamstack.com",
    ctaHref: "https://cutintothejamstack.com",
  },
  {
    title: "🛣 Tech Strategy",
    description: "I've written about various tech topics on the Echobind Blog.",
    ctaText: "Echobind Blog",
    ctaHref: "https://echobind.com/team/mike-cavaliere",
  },
  {
    title: "👔 Freelance Programming",
    description: "Older articles on freelancing as a programmer are below. ",
  },
];

export default function PostsIndexPage({
  allPosts: { edges },
}: PostsIndexPageProps) {
  const morePosts = edges;
  return (
    <>
      <Box mb={10}>
        <Heading as="h1">My Articles</Heading>
        <Heading as="h2" size="lg" fontWeight="normal">
          Over the years I've written about software, tech careers, and brain
          improvement.
        </Heading>
        <CardGrid>
          {ARTICLE_INDEX_CARDS.map(
            ({ title, description, ctaHref, ctaText }) => (
              <ArticleCategoryCard
                key={title}
                title={title}
                description={description}
                ctaText={ctaText}
                ctaHref={ctaHref}
              />
            )
          )}
        </CardGrid>
      </Box>
      <MoreStories posts={morePosts} />
    </>
  );
}

PostsIndexPage.getLayout = getLayout;

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
  };
}
