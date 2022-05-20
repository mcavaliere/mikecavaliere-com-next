import Image from "next/image";
import Link from "next/link";

export default function CoverImage({ title, coverImage, slug }) {
  const image = (
    <Image
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      src={coverImage?.sourceUrl}
      layout="intrinsic"
      objectFit="cover"
    />
  );
  return (
    <div className="sm:mx-0">
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
