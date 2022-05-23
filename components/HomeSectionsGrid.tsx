import { SimpleGrid } from "@chakra-ui/react";
import { Card } from "components/Card";

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

export function HomeSectionsGrid() {
  return (
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
  );
}