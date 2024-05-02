"use server";;

import { globby } from "globby";
import { delimiter,dirname } from "path";
import { read } from "to-vfile";
import { matter } from "vfile-matter";
import { readFileSync } from "fs";

const appDir = process.cwd();
const POST_PATHS_FILE_PATH = `${appDir}/data/postStaticPaths.json`;
const POSTS_MAP_FILE_PATH = `${appDir}/data/postMap.json`;


export async function getPostFrontMatter(slug: string) {
  const path = `${appDir}/data/posts/${slug}.mdx`;
  const file = await read(path);
  matter(file)

  return file.data.matter;
}

export async function getPostContent(slug: string) {
  const path = `${appDir}/data/posts/${slug}.mdx`;
  const contents = readFileSync(path, "utf-8");
  return contents
}

/**
 * Return an object of slug/frontmatter pairs for all posts.
 */
export async function getAllPostsMap() {
  const paths = await globby(["data/posts/**/*.mdx"]);

  const map = {
  }

  await Promise.all(
    paths.map(async (path) => {
      const file = await read(path);

      matter(file);
      const pathParts = path.split(/\//)
      const slug = pathParts[pathParts.length - 1].split(".")[0];

      map[slug] = {slug, ...(file.data.matter as Object)};
    })
  );

  return map;
}
