import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostsMap, getPostContent } from "@/lib/api";
import { rendererMapLowercase } from "@/lib/postRenderers";

export async function generateStaticParams() {
  const map = await getAllPostsMap();
  const params = Object.values(map)
  return params;
}

export default async function ArticlePage({ params: { slug } }) {
  const article = await getPostContent(slug);
  return (
    <MDXRemote
      source={article}
      components={rendererMapLowercase}
      options={{
        parseFrontmatter: true,
      }}
    />
  );
}
