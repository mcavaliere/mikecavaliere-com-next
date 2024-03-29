import CoverImage from "./cover-image";
import { Heading, Text } from "@chakra-ui/react";
import { stripHtml } from "lib/utils/stripHtml";
import { More } from "lib/postRenderers";
import { CardContainer, CardBody } from "components/Card";

if (!process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL) {
  throw new Error("Missing NEXT_PUBLIC_CLOUDINARY_BASE_URL");
}

export default function PostPreview({ title, coverImage, excerpt, slug }) {
  // Strip HTML to prevent rehydration mismatch errors.
  // See: https://nextjs.org/docs/messages/react-hydration-error
  const cleanedExcerpt = stripHtml(excerpt).replace(/\[\&hellip;\]/, "...");
  const hasMoreTag = /\[\&hellip;\]/.test(excerpt);

  return (
    <CardContainer
      as="article"
      p={0}
      href={`/posts/${slug}`}
      justify="flex-start"
    >
      {coverImage?.mediaDetails?.width ? (
        <CoverImage
          title={title}
          src={`${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}${coverImage.sourceUrl}`}
          slug={slug}
          width={coverImage.mediaDetails.width}
          height={coverImage.mediaDetails.height}
        />
      ) : null}

      <CardBody>
        <Heading as="h2" size="lg" mb={4}>
          {title}
        </Heading>

        <Text dangerouslySetInnerHTML={{ __html: cleanedExcerpt }} />
        {hasMoreTag ? <More href={`/${slug}`} /> : null}
      </CardBody>
    </CardContainer>
  );
}
