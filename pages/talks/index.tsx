import { Heading, HStack, IconButton, Button } from "@chakra-ui/react";
import CoverImage from "components/cover-image";
import { CardGrid } from "components/CardGrid";
import { CardBody, CardContainer } from "components/Card";
import { Interviews } from "data/interviews";
import { Talks } from "data/talks";
import { Interview, Talk } from "lib/types";
import { Heading1, Heading2, P } from "components/Headings";
import { FaVideo, FaSlideshare } from "react-icons/fa";

export type TalkCardProps = {
  talkOrInterview: Talk | Interview;
};

export function TalkCard({ talkOrInterview }: TalkCardProps) {
  const {
    title,
    imageUrl,
    videoUrl,
    excerpt,
    description,
    imageWidth,
    imageHeight,
  } = talkOrInterview;
  return (
    <CardContainer as="article" p={0} justify="flex-start" key={title}>
      {imageUrl && imageWidth && imageHeight && (
        <CoverImage
          title={title}
          src={imageUrl}
          width={imageWidth}
          height={imageHeight}
        />
      )}

      <CardBody display="flex" flexDirection="column" flex={1}>
        <Heading2 size="md" mb={3} fontWeight="bold">
          {title}
        </Heading2>

        {excerpt ? (
          <P d="flex" flexDirection="column" flex={1}>
            {excerpt}
          </P>
        ) : null}
        {description ? (
          <P d="flex" flexDirection="column" flex={1}>
            {description}
          </P>
        ) : null}

        <HStack justifyContent="flex-end" mt={5}>
          {videoUrl ? (
            <Button
              as="a"
              href={videoUrl}
              size="sm"
              target="_blank"
              rightIcon={<FaVideo />}
            >
              Video
            </Button>
          ) : null}
          {talkOrInterview["slidesUrl"] ? (
            <Button
              as="a"
              href={talkOrInterview["slidesUrl"]}
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
  );
}

export default function TalksPage() {
  return (
    <>
      <section>
        <Heading1 textAlign="center" mb={5}>
          Conference Talks
        </Heading1>

        <CardGrid mb={10}>
          {Talks.map((talk) => (
            <TalkCard key={talk.title} talkOrInterview={talk} />
          ))}
        </CardGrid>
      </section>

      <section>
        <Heading1 textAlign="center" mb={5}>
          Podcast Interviews
        </Heading1>

        <CardGrid>
          {Interviews.map((interview) => (
            <TalkCard key={interview.title} talkOrInterview={interview} />
          ))}
        </CardGrid>
      </section>
    </>
  );
}
