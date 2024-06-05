"use client";

import CoverImage from "./cover-image";
import { stripHtml } from "lib/utils/stripHtml";
import { More } from "lib/postRenderers";
import { FeaturedImage } from "@/lib/types";
import Link from "next/link";
import { ArticleCard, CARD_DEFAULT_CLASSNAMES, CardContent } from "./ui/card";
import { cn } from "@/lib/utils";

if (!process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL) {
  throw new Error("Missing NEXT_PUBLIC_CLOUDINARY_BASE_URL");
}

export default function PostPreview({
  title,
  coverImage,
  excerpt,
  slug,
}: {
  title: string;
  coverImage?: FeaturedImage;
  excerpt: string;
  slug: string;
}) {
  // Strip HTML to prevent rehydration mismatch errors.
  // See: https://nextjs.org/docs/messages/react-hydration-error
  const cleanedExcerpt = stripHtml(excerpt).replace(/\[\&hellip;\]/, "...");

  return (
    <Link passHref href={`/posts/${slug}`} className="flex flex-col flex-1">
      <ArticleCard className="flex-col flex-1 h-full">
        <CardContent>
          <h2 className="text-lg mb-2 text-3xl font-bold">{title}</h2>

          <p
            dangerouslySetInnerHTML={{ __html: cleanedExcerpt }}
            className="flex flex-col flex-1"
          />
          <More href={`/posts/${slug}`} className="mt-4" />
        </CardContent>
      </ArticleCard>
    </Link>
  );
}
