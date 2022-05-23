import Head from "next/head";
import { SimpleGrid } from "@chakra-ui/react";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import { HomeHero } from "components/HomeHero";
import { Card } from "components/Card";
import Intro from "../components/intro";
import { NextPageWithLayout } from "lib/types";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import { getLayout } from "layouts/HomePageLayout";

export type IndexPageProps = NextPageWithLayout & {
  allPosts: Record<string, any>;
  preview: any;
};

const GRID_ITEMS = [
  {
    title: "Articles",
    body: "Writing I've done on full-stack web development, technology careers, and brain improvement.",
    href: "/articles",
    buttonText: "my articles",
  },
  {
    title: "Book",
    body: "My book about Jamstack SaaS development.",
    href: "https://cutintothejamstack.com",
    buttonText: "Cut Into The Jamstack",
  },
  {
    title: "Talks",
    body: "Presentations I've given at conferences, meetups and other events.",
    href: "/talks",
    buttonText: "my talks",
  },
];

export default function IndexPage({
  allPosts: { edges },
  preview,
}: IndexPageProps) {
  const morePosts = edges.slice(1);

  return (
    <>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>

      <HomeHero />

      {/* <Intro /> */}

      {/* {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.featuredImage.node}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )} */}

      {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}

      <SimpleGrid
        alignItems="start"
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={8}
      >
        {GRID_ITEMS.map(({ href, title, body, buttonText }) => (
          <Card
            key={title}
            href={href}
            title={title}
            body={body}
            buttonText={buttonText}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
  };
}

IndexPage.getLayout = getLayout;
