"use client";

import Date from "./date";
import PostTitle from "./post-title";
import CoverImage from "components/cover-image";
import { FeaturedImage } from "@/lib/types";

export function PostHeader({
  title,
  date,
  featuredImage,
}: {
  title: string;
  date: Date;
  featuredImage?: FeaturedImage;
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      {featuredImage?.src ? (
        <div className="shadow-inner overflow-hidden w-full md:w-1/2 md:float-right md:ml-4 mb-2.5 md:mb-7">
          <CoverImage
            title={title}
            src={featuredImage.src}
            width={featuredImage.width}
            height={featuredImage.height}
          />
        </div>
      ) : null}

      <div className="flex flex-row mb-3">
        <Date dateString={date} />
      </div>
    </>
  );
}
