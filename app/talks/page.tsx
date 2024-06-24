import { Button } from "components/ui/button";
import CoverImage from "components/cover-image";
import { CardGrid } from "components/CardGrid";
import { Interviews } from "data/interviews";
import { Talks } from "data/talks";
import { Interview, Talk } from "lib/types";
import { Heading1, Heading2, P } from "components/Headings";
import { Presentation, Video } from "lucide-react";

import { ArticleCard, CardContent } from "@/components/ui/card";
import Link from "next/link";

type TalkCardProps = {
  talkOrInterview: Talk | Interview;
};

function TalkCard({ talkOrInterview }: TalkCardProps) {
  const { title, imageUrl, videoUrl, excerpt, description, imageWidth, imageHeight } =
    talkOrInterview;
  return (
    <ArticleCard key={title}>
      {title && imageUrl && imageWidth && imageHeight && (
        <CoverImage title={title} src={imageUrl} width={imageWidth} height={imageHeight} />
      )}

      <CardContent className="flex flex-col flex-1 p-5">
        <Heading2 size="md" className="mb-3">
          {title}
        </Heading2>

        {excerpt ? <p className="flex flex-col">{excerpt}</p> : null}
        {description ? <p className="flex flex-col flex-1">{description}</p> : null}

        <div className="flex flex-row justify-end mt-3 gap-2">
          {videoUrl ? (
            <Link href={videoUrl} passHref target="_blank">
              <Button size="sm" className="font-bold">
                Video <Video className="size-4 ml-2" />
              </Button>
            </Link>
          ) : null}

          {talkOrInterview["slidesUrl"] ? (
            <Link href={talkOrInterview["slidesUrl"]} passHref target="_blank">
              <Button size="sm" className="font-bold">
                Slides
                <Presentation className="size-4 ml-2" />
              </Button>
            </Link>
          ) : null}
        </div>
      </CardContent>
    </ArticleCard>
  );
}

export default function TalksPage() {
  return (
    <>
      <section id="talks" className="mb-10">
        <Heading1 className="my-10 text-center">Conference Talks</Heading1>

        <Heading2 className="mb-20 font-normal text-center">
          Presentations and podcast interviews I&#39;ve done, both in-person and virtual.
        </Heading2>

        <CardGrid className="mb-4">
          {Talks.map((talk) => (
            <TalkCard key={talk.title} talkOrInterview={talk} />
          ))}
        </CardGrid>
      </section>

      <section id="interviews" className="mb-10">
        <Heading1 className="my-10 text-center">Podcast Interviews</Heading1>

        <CardGrid>
          {Interviews.map((interview) => (
            <TalkCard key={interview.title} talkOrInterview={interview} />
          ))}
        </CardGrid>
      </section>
    </>
  );
}
