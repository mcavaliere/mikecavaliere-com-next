import { HomeHero } from "components/HomeHero";
import { HomeSectionsGrid } from "components/HomeSectionsGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mike Cavaliere: software engineer, conference speaker, author.",
  description:
    "The personal website of Mike Cavaliere: software engineer, conference speaker, and author.",
};

export default function IndexPage() {
  return (
    <>
      <HomeHero />

      <HomeSectionsGrid />
    </>
  );
}
