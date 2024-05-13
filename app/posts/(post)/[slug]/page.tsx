import type { Metadata, ResolvingMetadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostsMap, getPostContent, getPostFrontMatter } from "@/lib/api";
import { rendererMapLowercase } from "@/lib/postRenderers";
import { PostHeader } from "@/components/post-header";

export async function generateStaticParams() {
  const map = await getAllPostsMap();
  const params = Object.values(map);
  return params;
}

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const frontmatter = await getPostFrontMatter(slug);

  return {
    title: frontmatter.title,
    description: frontmatter.excerpt,
    alternates: {
      canonical: `/posts/${slug}`,
    },
    openGraph: frontmatter.featuredImage?.src
      ? {
          images: [frontmatter.featuredImage?.src],
        }
      : undefined,
      twitter: {
        card: frontmatter.featuredImage?.src ? "summary_large_image" : "summary",
        site: "@mcavaliere",
        description: frontmatter.excerpt,
        images: frontmatter.featuredImage?.src ? [frontmatter.featuredImage?.src] : undefined
      }
  };
}

export default async function ArticlePage({ params: { slug } }) {
  const article = await getPostContent(slug);
  const frontmatter = await getPostFrontMatter(slug);

  return (
    <>
      <PostHeader {...frontmatter} />
      <MDXRemote
        source={article}
        components={rendererMapLowercase}
        options={{
          parseFrontmatter: true,
        }}
      />
    </>
  );
}
