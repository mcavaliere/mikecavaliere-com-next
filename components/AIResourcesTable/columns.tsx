"use client";

import { ColumnDef } from "@tanstack/react-table";
import { AIResource, AIResourceCategoryColors } from "./types";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/Link";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { ArrowUp, ArrowDown } from "lucide-react";
import dayjs from "dayjs";
import { Badge } from "../ui/badge";

export function GithubButton({ url }: { url: string }) {
  return (
    <Link href={url} target="_blank">
      <Button size="icon">
        <FaGithub className="w-5 h-5" />
      </Button>
    </Link>
  );
}

export function WebsiteButton({ url }: { url: string }) {
  return (
    <Link href={url} target="_blank">
      <Button size="icon">
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
    <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
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
        <div className="flex flex-row gap-2">
          {githubUrl ? <GithubButton url={githubUrl} /> : null}
          {websiteUrl ? <WebsiteButton url={websiteUrl} /> : null}
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
    accessorKey: "category",
    header: ({ column }) => {
      return <SortLink column={column} label="Category" />;
    },
    cell: (cell) => {
      const category = cell.row.original.category;
      const categoryClassName = AIResourceCategoryColors[category];
      return (
        <Badge
          className={`${categoryClassName} hover:${categoryClassName} text-background dark:text-foreground`}
        >
          {cell.row.original.category}
        </Badge>
      );
    },
  },
  {
    accessorKey: "tags",
    header: "Tags",
  },
];
