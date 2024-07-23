import { AIResource } from "./types";
import Link from "next/link";
import { Heading2 } from "../Headings";
import { SquareArrowUpRight } from "lucide-react";

export function ArticleList({ articles }: { articles: AIResource[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {articles.map((article) => (
        <li key={article.name}>
          <Link
            href={article.websiteUrl as string}
            target="_blank"
            className="flex flex-row items-center gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent bg-muted"
          >
            <div className="flex-1">
              <Heading2 className="text-lg">{article.name}</Heading2>
              <p>{article.description}</p>
            </div>
            <SquareArrowUpRight className="w-4 h-4" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
