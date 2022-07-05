import { VStack } from "@chakra-ui/react";
import { Heading1 } from "components/Headings";
import { TalkRow } from "components/TalkRow";
import { Talks } from "data/talks";

export default function TalksPage() {
  return (
    <>
      <Heading1 textAlign="center">Talks & Interviews</Heading1>

      <VStack spacing={8} padding={[0, 5]}>
        {Talks.map((talk) => (
          <TalkRow talk={talk} key={talk.title} />
        ))}
      </VStack>
    </>
  );
}
