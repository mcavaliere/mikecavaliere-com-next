import Image, { ImageProps } from "next/image";
import Link from "next/link";

export type CoverImageProps = {
  title: string;
  src: string;
  slug?: string;
  width: number;
  height: number;
};

if (!process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL) {
  throw new Error("Missing NEXT_PUBLIC_CLOUDINARY_BASE_URL");
}

export default function CoverImage({
  title,
  src,
  slug,
  width,
  height,
}: CoverImageProps) {
  const image = (
    <Image
      width={width}
      height={height}
      alt={`Cover Image for "${title}"`}
      src={`${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}${src}`}
      layout="intrinsic"
      objectFit="cover"
    />
  );
  return slug ? <Link href={`/${slug}`}>{image}</Link> : <>{image}</>;
}
