import { AIResources } from "../../data/ai-resources";
import { ArticleList } from "./ArticleList";
import { AIResource } from "./types";

/**
 * Container component for AI for JS Devs article list.
 */
export function AIArticleList() {
  const articles = AIResources.filter((r) => ["articles", "learning"].includes(r.category));

  return <ArticleList articles={articles as AIResource[]} />;
}
