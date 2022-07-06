import { Heading, VStack } from "@chakra-ui/react";
import CoverImage from "components/cover-image";
import { CardGrid } from "components/CardGrid";
import { CardBody, CardContainer } from "components/Card";
import { TalkRow } from "components/TalkRow";
import { Talks } from "data/talks";
import { Heading1 } from "components/Headings";

export default function TalksPage() {
  return (
    <>
      <Heading1 textAlign="center">Talks & Interviews</Heading1>

      <CardGrid>
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
            </CardBody>
          </CardContainer>
        ))}
      </CardGrid>
    </>
  );
}
