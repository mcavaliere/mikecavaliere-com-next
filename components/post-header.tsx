"use client";

import { Box, Flex, Text } from "@chakra-ui/react";

// import Avatar from "./avatar";
import Date from "./date";

import PostTitle from "./post-title";
import Categories from "./categories";
import CoverImage from "components/cover-image";

import { useEffect, useState } from "react";
import { getPostFrontMatter } from "@/lib/api";
import { useSelectedLayoutSegment } from "next/navigation";

/**
 * Fetch the post front matter based on the current slug, and render the PostHeader.
 */
export function PostHeaderContainer() {
  const segment = useSelectedLayoutSegment();
  const [post, setPost] = useState<Record<string, any>>();
  console.log(`segment:`, segment);

  useEffect(() => {
    console.log(`useEffect`);
    if (!segment || !!post) return;

    getPostFrontMatter(segment).then((post) => {
      console.log(`---------------- got post:  `, post);
      setPost(() => post);
    });
  }, [segment, post]);

  if (!post) return null;

  return <PostHeader {...post} />;
}

export function PostHeader({
  title,
  date,
  author,
  // categories,
  slug,
  featuredImage,
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
        {/* <Avatar author={author} /> */}

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
