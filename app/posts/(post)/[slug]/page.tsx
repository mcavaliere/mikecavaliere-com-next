import type { Metadata, ResolvingMetadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostsMap, getPostContent, getPostFrontMatter } from "@/lib/api";

import { PostHeader } from "@/components/post-header";
import { mdxComponents } from "@/mdx-components";

export async function generateStaticParams() {
  const map = await getAllPostsMap();
  const params = Object.values(map);
  return params;
}

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export async function generateMetadata(props: {
  params: Params;
  searchParams: SearchParams;
}): Promise<Metadata> {
  // read route params
  const params = await props.params;
  // const searchParams = await props.searchParams
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
      images: frontmatter.featuredImage?.src ? [frontmatter.featuredImage?.src] : undefined,
    },
  };
}

export default async function ArticlePage(props: { params: Params; searchParams: SearchParams }) {
  const params = await props.params;
  const slug = params.slug;
  const article = await getPostContent(slug);
  const frontmatter = await getPostFrontMatter(slug);

  return (
    <>
      <PostHeader {...frontmatter} />

      <MDXRemote
        source={article}
        components={mdxComponents}
        options={{
          parseFrontmatter: true,
        }}
      />
    </>
  );
}
