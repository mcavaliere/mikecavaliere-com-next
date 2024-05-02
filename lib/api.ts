import { globby } from "globby";
import { delimiter,dirname } from "path";
import { read } from "to-vfile";
import { matter } from "vfile-matter";

const appDir = process.cwd();
export const POST_PATHS_FILE_PATH = `${appDir}/data/postStaticPaths.json`;
export const POSTS_MAP_FILE_PATH = `${appDir}/data/postMap.json`;


/**
 * Return an object of slug/frontmatter pairs for all posts.
 */
export async function getAllPostsMap() {
  const paths = await globby(["app/**/*.mdx"]);

  const map = {
  }

  await Promise.all(
    paths.map(async (path) => {
      const file = await read(path);
      matter(file);
      const pathParts = path.split(/\//)
      const slug = pathParts[pathParts.length - 2];

      map[slug] = {slug, ...(file.data.matter as Object)};

    })
  );

  return map;
}
