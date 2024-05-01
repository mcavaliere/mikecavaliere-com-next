

import PostPreview from "./post-preview";
import { SimpleGrid } from "@chakra-ui/react";

export default function MoreStories({ posts }) {
  return (
    <section>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={5}>
        {posts.map(({ slug, title, featuredImage, excerpt }) => (
          <PostPreview
            key={slug}
            title={title}
            coverImage={featuredImage.node}
            slug={slug}
            excerpt={excerpt}
          />
        ))}
      </SimpleGrid>
    </section>
  );
}
