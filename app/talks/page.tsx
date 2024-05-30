import { Heading, HStack, IconButton, Button } from "@chakra-ui/react";
import CoverImage from "components/cover-image";
import { CardGrid } from "components/CardGrid";
import { CardBody, CardContainer } from "components/Card";
import { Interviews } from "data/interviews";
import { Talks } from "data/talks";
import { Interview, Talk } from "lib/types";
import { Heading1, Heading2, P } from "components/Headings";
import { FaVideo, FaSlideshare } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { CARD_DEFAULT_CLASSNAMES, CardContent } from "@/components/ui/card";

type TalkCardProps = {
  talkOrInterview: Talk | Interview;
};

function TalkCard({ talkOrInterview }: TalkCardProps) {
  const { title, imageUrl, videoUrl, excerpt, description, imageWidth, imageHeight } =
    talkOrInterview;
  return (
    <article className={cn(CARD_DEFAULT_CLASSNAMES, "justify-start")} key={title}>
      {title && imageUrl && imageWidth && imageHeight && (
        <CoverImage title={title} src={imageUrl} width={imageWidth} height={imageHeight} />
      )}

      <CardContent className="flex flex-col flex-1 p-4">
        <Heading2 size="md" className="mb-3">
          {title}
        </Heading2>

        {excerpt ? <p className="flex flex-col">{excerpt}</p> : null}
        {description ? <p className="flex flex-col flex-1">{description}</p> : null}

        <div className="flex flex-row justify-end mt-3 gap-2">
          {videoUrl ? (
            <Button as="a" href={videoUrl} size="sm" target="_blank" rightIcon={<FaVideo />}>
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
        </div>
      </CardContent>
    </article>
  );
}

export default function TalksPage() {
  return (
    <>
      <section id="talks">
        <Heading1 className="mb-3 text-center">Conference Talks</Heading1>

        <CardGrid className="mb-4">
          {Talks.map((talk) => (
            <TalkCard key={talk.title} talkOrInterview={talk} />
          ))}
        </CardGrid>
      </section>

      <section id="interviews">
        <Heading1 className="mb-3 text-center">Podcast Interviews</Heading1>

        <CardGrid>
          {Interviews.map((interview) => (
            <TalkCard key={interview.title} talkOrInterview={interview} />
          ))}
        </CardGrid>
      </section>
    </>
  );
}
