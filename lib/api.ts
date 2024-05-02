"use server";

import { globby } from "globby";
import { delimiter, dirname } from "path";
import { read } from "to-vfile";
import { matter } from "vfile-matter";
import { readFileSync } from "fs";

const appDir = process.cwd();
const POST_PATHS_FILE_PATH = `${appDir}/data/postStaticPaths.json`;
const POSTS_MAP_FILE_PATH = `${appDir}/data/postMap.json`;

type PostFrontMatterPayload = {
  slug: string;
  title: string;
  excerpt: string;
  date: Date;
  featuredImage?: {
    src: string;
    width: number;
    height: number;
  };
}

export async function getPostFrontMatter(slug: string): Promise<PostFrontMatterPayload> {
  const path = `${appDir}/data/posts/${slug}.mdx`;
  const file = await read(path);
  matter(file);

  return {
    slug,
    ...(file.data.matter as Omit<PostFrontMatterPayload, 'slug'>),
  };
}

export async function getPostContent(slug: string) {
  const path = `${appDir}/data/posts/${slug}.mdx`;
  const contents = readFileSync(path, "utf-8");
  return contents;
}

/**
 * Return an object of slug/frontmatter pairs for all posts.
 */
export async function getAllPostsMap(): Promise<Record<string, PostFrontMatterPayload>> {
  const path = `${appDir}/data/posts/**/*.mdx`;
  const paths = await globby([path]);

  const map = {};

  await Promise.all(
    paths.map(async (path) => {
      const file = await read(path);

      matter(file);
      const pathParts = path.split(/\//);
      const slug = pathParts[pathParts.length - 1].split(".")[0];

      const obj = { slug, ...(file.data.matter as Object) };

      map[slug] = obj;
    })
  );

  return map;
}
