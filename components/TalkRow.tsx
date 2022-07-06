import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { Heading2, P } from "components/Headings";
import Image from "next/image";
import { Talk } from "data/talks";

export function TalkImage({
  talk: { imageUrl: url, imageHeight: height, imageWidth: width },
}): JSX.Element {
  return (
    <Box width={200} mr={4}>
      <Image src={url} alt="talk" width={width} height={height} />
    </Box>
  );
}

export function TalkLinks({
  talk: { videoUrl, slidesUrl },
}: {
  talk: Talk;
}): JSX.Element {
  return (
    <HStack>
      {videoUrl ? (
        <Button as="a" href={videoUrl}>
          Video
        </Button>
      ) : null}
      {slidesUrl ? (
        <Button as="a" href={slidesUrl}>
          Slides
        </Button>
      ) : null}
    </HStack>
  );
}

export function TalkRow({ talk }) {
  return (
    <Flex
      as="article"
      width="100%"
      align="center"
      borderWidth={1}
      borderRadius="md"
      borderStyle="solid"
      p={4}
    >
      {talk.imageUrl ? <TalkImage talk={talk} /> : null}
      <Box flex="1">
        <Heading2>{talk.title}</Heading2>
        {talk.description ? <P>{talk.description}</P> : null}
      </Box>
    </Flex>
  );
}
