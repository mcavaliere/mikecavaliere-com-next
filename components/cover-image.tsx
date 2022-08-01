import Image from "next/image";
import Link from "next/link";

export type CoverImageProps = {
  title: string;
  src: string;
  slug?: string;
  width: number;
  height: number;
};

export default function CoverImage({ title, src, slug }: CoverImageProps) {
  const image = (
    <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={src}
      layout="intrinsic"
      objectFit="cover"
    />
  );
  return (
    <div>
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
