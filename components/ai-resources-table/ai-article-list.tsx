import { AIResources } from "../../data/ai-resources";
import { ArticleList } from "./article-list";
import { AIResource } from "./types";

/**
 * Container component for AI for JS Devs article list.
 */
export function AIArticleList() {
  const articles = AIResources.filter(
    (r) => ["articles", "learning"].includes(r.category) && !!r.websiteUrl
  ).sort((a, b) => (a.name > b.name ? 1 : -1));

  return <ArticleList articles={articles as AIResource[]} />;
}
