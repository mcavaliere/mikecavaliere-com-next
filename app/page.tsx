import { HomeHero } from "components/HomeHero";
import { HomeSectionsGrid } from "components/HomeSectionsGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mike Cavaliere: software engineer, conference speaker, author.",
  description: "Over the years I've written about software, tech careers, and brain improvement.",
};

export default function IndexPage() {
  return (
    <>
      <HomeHero />

      <HomeSectionsGrid />
    </>
  );
}
