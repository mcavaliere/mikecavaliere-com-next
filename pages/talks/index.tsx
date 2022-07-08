import { Heading, HStack, IconButton, Button } from "@chakra-ui/react";
import CoverImage from "components/cover-image";
import { CardGrid } from "components/CardGrid";
import { CardBody, CardContainer } from "components/Card";
import { Interviews } from "data/interviews";
import { Talks } from "data/talks";
import { Heading1 } from "components/Headings";
import { FaVideo, FaSlideshare } from "react-icons/fa";

export default function TalksPage() {
  return (
    <>
      <Heading1 textAlign="center" mb={5}>
        Conference Talks
      </Heading1>

      <CardGrid mb={10}>
        {Talks.map((talk) => (
          <CardContainer
            as="article"
            p={0}
            justify="flex-start"
            key={talk.title}
          >
            {talk.imageUrl && (
              <CoverImage title={talk.title} src={talk.imageUrl} />
            )}

            <CardBody>
              <Heading as="h2" size="lg">
                {talk.title}
              </Heading>

              <HStack>
                {talk.videoUrl ? (
                  <Button
                    as="a"
                    href={talk.videoUrl}
                    size="sm"
                    target="_blank"
                    rightIcon={<FaVideo />}
                  >
                    Video
                  </Button>
                ) : null}
                {talk.slidesUrl ? (
                  <Button
                    as="a"
                    href={talk.slidesUrl}
                    size="sm"
                    target="_blank"
                    rightIcon={<FaSlideshare />}
                  >
                    Slides
                  </Button>
                ) : null}
              </HStack>
            </CardBody>
          </CardContainer>
        ))}
      </CardGrid>

      <Heading1 textAlign="center" mb={5}>
        Podcast Interviews
      </Heading1>

      <CardGrid>
        {Interviews.map((article) => (
          <CardContainer
            as="article"
            p={0}
            justify="flex-start"
            key={article.title}
          >
            {article.imageUrl && (
              <CoverImage title={article.title} src={article.imageUrl} />
            )}

            <CardBody>
              <Heading as="h2" size="lg">
                {article.title}
              </Heading>

              <HStack>
                {article.videoUrl ? (
                  <Button
                    as="a"
                    href={article.videoUrl}
                    size="sm"
                    target="_blank"
                    rightIcon={<FaVideo />}
                  >
                    Video
                  </Button>
                ) : null}
              </HStack>
            </CardBody>
          </CardContainer>
        ))}
      </CardGrid>
    </>
  );
}
