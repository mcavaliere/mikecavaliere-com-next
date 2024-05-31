import resources from "../../data/ai-resources.json";
import { columns } from "./columns";
import { DataTable } from "./DataTable";
import { AIResource } from "./types";

export function AIResourcesTable() {
  return (
    <>
      <DataTable columns={columns} data={resources as AIResource[]} />
    </>
  );
}
