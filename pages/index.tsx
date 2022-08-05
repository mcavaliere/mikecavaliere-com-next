import Head from "next/head";
import { HomeHero } from "components/HomeHero";
import { HomeSectionsGrid } from "components/HomeSectionsGrid";
import { Meta } from "components/meta";
import { NextPageWithLayout } from "lib/types";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

export type IndexPageProps = NextPageWithLayout & {
  allPosts: Record<string, any>;
  preview: any;
};

export default function IndexPage({
  allPosts: { edges },
  preview,
}: IndexPageProps) {
  const morePosts = edges.slice(1);

  return (
    <>
      <Meta
        titlePrefix="Mike Cavaliere: software engineer, conference speaker, author."
        titleSuffix=""
        titleSeparator=""
        description="Over the years I've written about software, tech careers, and brain improvement."
      />
      <HomeHero />

      <HomeSectionsGrid />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
  };
}
