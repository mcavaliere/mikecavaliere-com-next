"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import Date from "./date";
import PostTitle from "./post-title";
import CoverImage from "components/cover-image";
import { FeaturedImage } from "@/lib/types";

export function PostHeader({
  title,
  date,
  slug,
  featuredImage,
}: {
  title: string,
  date: Date,
  slug: string,
  featuredImage?: FeaturedImage
}) {
  return (
    <>
      <PostTitle mb={5}>{title}</PostTitle>
      {featuredImage?.src ? (
        <Box
          boxShadow="dark-inner"
          overflow="hidden"
          width={{ base: "100%", md: "50%" }}
          float={{ base: "none", md: "right" }}
          ml={{ base: "0", md: 5 }}
        >
          <CoverImage
            title={title}
            src={featuredImage.src}
            width={featuredImage.width}
            height={featuredImage.height}
          />
        </Box>
      ) : null}

      <Flex direction="row" mb={5}>
        <Box>
          <Text fontSize="sm" mb={1}>
            <Date dateString={date} />
          </Text>
          {/* <Categories categories={categories} /> */}
        </Box>
      </Flex>
    </>
  );
}
