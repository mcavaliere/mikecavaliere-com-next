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
} & Omit<ImageProps, "alt">;

export default function CoverImage({
  title,
  src,
  href,
  width,
  height,
  className = "",
}: CoverImageProps) {
  const classNames = cn("max-w-full h-auto object-cover", className);
  const image = (
    <Image
      width={width}
      height={height}
      alt={`Cover Image for "${title}"`}
      src={`${src}`}
      className={classNames}
    />
  );

  return href ? <Link href={`/${href}`}>{image}</Link> : <>{image}</>;
}
