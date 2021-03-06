import Head from "next/head";
import { HomeHero } from "components/HomeHero";
import { HomeSectionsGrid } from "components/HomeSectionsGrid";
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
