"use client";

import { ColumnDef } from "@tanstack/react-table";
import { AIResource } from "./types";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/Link";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { ArrowUp, ArrowDown } from "lucide-react";
import dayjs from "dayjs";
import { TagBadge } from "./TagBadge";
import { cn } from "@/lib/utils";

export const headerTextSize = "text-md";

export function GithubButton({ url, className = "" }: { url: string; className?: string }) {
  const classNames = cn("inline-block", className);
  return (
    <Link href={url} target="_blank" className={classNames}>
      <Button size="icon" className="bg-transparent hover:scale-110 hover:bg-transparent">
        <FaGithub className="w-5 h-5" />
      </Button>
    </Link>
  );
}

export function WebsiteButton({ url, className }: { url: string; className?: string }) {
  const classNames = cn("inline-block", className);

  return (
    <Link href={url} target="_blank" className={classNames}>
      <Button size="icon" className="bg-transparent hover:scale-110 hover:bg-transparent">
        <FaGlobe className="w-5 h-5" />
      </Button>
    </Link>
  );
}

export function getSortIcon({ column }) {
  const sortDir = column.getIsSorted();
  return sortDir === "asc" ? (
    <ArrowUp className="ml-2 h-4 w-4" />
  ) : sortDir === "desc" ? (
    <ArrowDown className="ml-2 h-4 w-4" />
  ) : null;
}

export function SortLink({ column, label }) {
  const sortIcon = getSortIcon({ column });
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      className={`${headerTextSize}`}
    >
      {label}
      {sortIcon}
    </Button>
  );
}

export const columns: ColumnDef<AIResource>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return <SortLink column={column} label="Name" />;
    },
    cell: (cell) => {
      const githubUrl = cell.row.original.githubUrl;
      const websiteUrl = cell.row.original.websiteUrl;
      const name = cell.row.original.name;
      const url = websiteUrl || githubUrl;

      if (!url) return name;

      return (
        <Link href={url} target="_blank">
          {name}
        </Link>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "links",
    header: "Links",
    cell: (cell) => {
      const githubUrl = cell.row.original.githubUrl;
      const websiteUrl = cell.row.original.websiteUrl;

      return (
        <div className="grid grid-cols-2 gap-2">
          {githubUrl ? <GithubButton url={githubUrl} /> : <span></span>}
          {websiteUrl ? <WebsiteButton url={websiteUrl} /> : <span></span>}
        </div>
      );
    },
  },
  {
    accessorKey: "addedOn",
    header: ({ column }) => {
      return <SortLink column={column} label="Date Added" />;
    },
    cell: (cell) => {
      const addedOn = cell.row.original.addedOn;

      return dayjs(addedOn).format("MMM D, YYYY");
    },
  },
  {
    accessorKey: "tags",
    header: "Tags (click to filter)",
    filterFn: "arrIncludesAll",
    cell: (cell) => {
      const tags = cell.row.original.tags;

      return (
        <ul className="max-w-48">
          {tags?.sort().map((t) => {
            return (
              <li key={t} className="mb-1 mr-1 inline-block">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    cell.column.setFilterValue([t]);
                  }}
                >
                  <TagBadge t={t} includeHovers />
                </a>
              </li>
            );
          })}
        </ul>
      );
    },
  },
];
