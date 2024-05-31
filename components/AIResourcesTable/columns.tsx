"use client";

import { ColumnDef } from "@tanstack/react-table";
import { AIResource } from "./types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaGlobe } from "react-icons/fa";

export function GithubButton({ url }: { url: string }) {
  return (
    <Link href={url}>
      <Button size="icon">
        <FaGithub className="w-5 h-5" />
      </Button>
    </Link>
  );
}

export function WebsiteButton({ url }: { url: string }) {
  return (
    <Link href={url}>
      <Button size="icon">
        <FaGlobe className="w-5 h-5" />
      </Button>
    </Link>
  );
}

export const columns: ColumnDef<AIResource>[] = [
  {
    accessorKey: "name",
    header: "Name",
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
];
