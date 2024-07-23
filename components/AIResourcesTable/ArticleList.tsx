import { AIResource } from "./types";

export function ArticleList({ articles }: { articles: AIResource[] }) {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.name}>
          <h2>{article.name}</h2>
          <p>{article.description}</p>
          <p>{article.addedOn}</p>
        </li>
      ))}
    </ul>
  );
}
