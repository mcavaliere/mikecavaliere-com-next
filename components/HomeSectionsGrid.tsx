import { SimpleGrid } from "@chakra-ui/react";
import { HomeSectionCard } from "components/HomeSectionCard";
import { NAVBAR_LINKS_MAP } from "lib/constants";

const GRID_ITEMS = [
  {
    title: "Articles",
    body: "Writing I've done on full-stack web development, technology careers, and brain improvement.",
    href: NAVBAR_LINKS_MAP["articles"].href,
    buttonText: "My Articles",
    emoji: "🖊",
  },
  {
    title: "Book",
    body: "Build a SaaS application along with me using the full-stack Jamstack. A crash course in Next.js, Chakra-UI, Prisma ORM and other modern JavaScript libraries.",
    href: "https://cutintothejamstack.com",
    buttonText: "Cut Into The Jamstack",
    emoji: "📘",
  },
  {
    title: "Talks",
    body: "Presentations I've given at conferences, meetups and other events.",
    href: NAVBAR_LINKS_MAP["talks"].href,
    buttonText: "My Talks",
    emoji: "🎙",
  },
];

export function HomeSectionsGrid() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
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
    </SimpleGrid>
  );
}
