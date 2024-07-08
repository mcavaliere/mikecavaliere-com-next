"use client";

import Date from "./date";
import CoverImage from "components/cover-image";
import { FeaturedImage } from "@/lib/types";
import { Heading1 } from "./Headings";

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
      <div className="sm:flex sm:justify-between mb-4 items-start">
        <Heading1>{title}</Heading1>

        <Date dateString={date} className="text-nowrap sm:mt-2" />
      </div>

      {featuredImage?.src ? (
        <div className={`overflow-hidden w-full md:w-auto md:float-right md:ml-4 mb-2.5 md:mb-7`}>
          <CoverImage
            className="inline-block w-full"
            title={title}
            src={featuredImage.src}
            width={featuredImage.width}
            height={featuredImage.height}
          />
        </div>
      ) : null}
    </>
  );
}
