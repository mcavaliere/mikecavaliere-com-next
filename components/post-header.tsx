import { Box, Flex, Text } from "@chakra-ui/react";

import Avatar from "./avatar";
import Date from "./date";

import PostTitle from "./post-title";
import Categories from "./categories";

export default function PostHeader({ title, date, author, categories, slug }) {
  return (
    <>
      <PostTitle mb={5}>{title}</PostTitle>

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
