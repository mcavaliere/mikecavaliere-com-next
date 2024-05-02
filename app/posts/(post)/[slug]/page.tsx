import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostsMap, getPostContent, getPostFrontMatter } from "@/lib/api";
import { rendererMapLowercase } from "@/lib/postRenderers";
import { PostHeader } from "@/components/post-header";

export async function generateStaticParams() {
  const map = await getAllPostsMap();
  const params = Object.values(map)
  return params;
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
