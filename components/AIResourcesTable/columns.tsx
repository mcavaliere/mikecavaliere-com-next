import { ColumnDef } from "@tanstack/react-table";
import { AIResource } from "./types";

export const columns: ColumnDef<AIResource>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];
