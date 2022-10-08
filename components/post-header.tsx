import { Box, Flex, Text } from "@chakra-ui/react";

import Avatar from "./avatar";
import Date from "./date";

import PostTitle from "./post-title";
import Categories from "./categories";
import CoverImage from "components/cover-image";

export default function PostHeader({
  title,
  date,
  author,
  categories,
  slug,
  featuredImage,
}) {
  return (
    <>
      <PostTitle mb={5}>{title}</PostTitle>
      {featuredImage?.sourceUrl ? (
        <Box
          boxShadow="dark-inner"
          overflow="hidden"
          width={{ base: "100%", md: "50%" }}
          float={{ base: "none", md: "right" }}
          ml={{ base: "0", md: 5 }}
        >
          <CoverImage
            slug={slug}
            title={title}
            src={featuredImage.sourceUrl}
            width={featuredImage.mediaDetails.width}
            height={featuredImage.mediaDetails.height}
          />
        </Box>
      ) : null}

      <Flex direction="row" mb={5}>
        <Avatar author={author} />

        <Box>
          <Text fontSize="sm" mb={1}>
            <Date dateString={date} />
          </Text>
          <Categories categories={categories} />
        </Box>
      </Flex>
    </>
  );
}
