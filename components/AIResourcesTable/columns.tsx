"use client";

import { ColumnDef } from "@tanstack/react-table";
import { AIResource } from "./types";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/Link";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { ArrowUpDown } from "lucide-react";
import dayjs from "dayjs";

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

export const columns: ColumnDef<AIResource>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
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
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Date Added
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: (cell) => {
      const addedOn = cell.row.original.addedOn;

      return dayjs(addedOn).format("MMM D, YYYY");
    },
  },
];
