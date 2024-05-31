import { Link } from "@/components/Link";
import resources from "../../data/ai-resources.json";
import { columns } from "./columns";
import { DataTable } from "./DataTable";
import { AIResource } from "./types";

export function AIResourcesTable() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={resources as AIResource[]} />
    </div>
  );
}
