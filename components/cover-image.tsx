import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

export type CoverImageProps = {
  title: string;
  src: string;
  href?: string;
  width: number;
  height: number;
  className?: string;
  caption?: string;
  alt?: string;
} & Omit<ImageProps, "alt">;

export default function CoverImage({
  title,
  src,
  href,
  width,
  height,
  className = "",
  caption = "",
  alt = "",
}: CoverImageProps) {
  const classNames = cn("max-w-full h-auto object-cover", className);
  const altText = alt || `Cover Image for "${title}"`;
  const image = (
    <figure>
      <Image width={width} height={height} alt={altText} src={`${src}`} className={classNames} />
      {caption ? (
        <figcaption
          className="text-sm text-center mt-2 italic"
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      ) : null}
    </figure>
  );

  return href ? <Link href={`/${href}`}>{image}</Link> : <>{image}</>;
}
