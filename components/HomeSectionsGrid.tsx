import { HomeSectionCard } from "components/HomeSectionCard";
import { NAVBAR_LINKS_MAP } from "lib/constants";
import { CardGrid } from "./CardGrid";

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
    body: "More about me, in more than 240 characters.",
    href: NAVBAR_LINKS_MAP["about"].href,
    buttonText: "About me",
    emoji: "🤔",
  },
  {
    title: "Book",
    body: "Build a SaaS application along with me using the full-stack Jamstack. A crash course in Next.js, Chakra-UI, Prisma ORM and other modern JavaScript libraries.",
    href: "https://cutintothejamstack.com",
    buttonText: "Cut Into The Jamstack",
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
