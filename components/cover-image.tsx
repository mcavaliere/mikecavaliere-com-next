import Image, { ImageProps } from "next/image";
import Link from "next/link";

export type CoverImageProps = {
  title: string;
  src: string;
  href?: string;
  width: number;
  height: number;
};

export default function CoverImage({
  title,
  src,
  href,
  width,
  height,
}: CoverImageProps) {
  const image = (
    <Image
      width={width}
      height={height}
      alt={`Cover Image for "${title}"`}
      src={`${src}`}
      style={{
        maxWidth: "100%",
        height: "auto",
        objectFit: "cover"
      }} />
  );

  return href ? <Link href={`/${href}`}>{image}</Link> : <>{image}</>;
}
