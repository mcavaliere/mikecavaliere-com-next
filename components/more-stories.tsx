import PostPreview from "./post-preview";
import { Box, SimpleGrid } from "@chakra-ui/react";

export default function MoreStories({ posts }) {
  return (
    <section>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={5}>
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage.node}
            date={node.date}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </SimpleGrid>
    </section>
  );
}
