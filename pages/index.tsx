import Head from "next/head";
import { HomeHero } from "components/HomeHero";
import { HomeSectionsGrid } from "components/HomeSectionsGrid";
import { Meta } from "components/meta";
import { NextPageWithLayout } from "lib/types";
import { getAllPostsMap } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

export type IndexPageProps = NextPageWithLayout & {};

export default function IndexPage({}: IndexPageProps) {
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
