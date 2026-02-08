import { HomeHero } from "components/home-hero";
import { HomeSectionsGrid } from "components/home-sections-grid";
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
