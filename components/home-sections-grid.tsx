import { HomeSectionCard } from "components/home-section-card";
import { NAVBAR_LINKS_MAP } from "lib/constants";
import { CardGrid } from "./card-grid";

const GRID_ITEMS = [
  {
    title: "Articles",
    body: "Writing I've done on full-stack web development, technology careers, and brain improvement.",
    href: NAVBAR_LINKS_MAP["articles"].href,
    buttonText: "My Articles",
    emoji: "🖊",
  },
  {
    title: "About Me",
    body: "About me, in more than 240 characters.",
    href: NAVBAR_LINKS_MAP["about"].href,
    buttonText: "About me",
    emoji: "🤔",
  },
  {
    title: "Projects",
    body: "My books and software projects.",
    href: "/projects",
    buttonText: "My Projects",
    emoji: "📘",
  },

  {
    title: "Talks & Interviews",
    body: "My presentations at tech conferences and meetups, and recordings of podcasts I've been on.",
    href: NAVBAR_LINKS_MAP["talks"].href,
    buttonText: "My Talks",
    emoji: "🎙",
  },
];

export function HomeSectionsGrid() {
  return (
    <CardGrid>
      {GRID_ITEMS.map(({ emoji, href, title, body, buttonText }) => (
        <HomeSectionCard
          key={title}
          emoji={emoji}
          href={href}
          title={title}
          body={body}
          buttonText={buttonText}
        />
      ))}
    </CardGrid>
  );
}
