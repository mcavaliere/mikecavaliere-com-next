import { AIResources } from "../../data/ai-resources";
import { columns } from "./columns";
import { DataTable } from "./DataTable";
import { AIResource } from "./types";

export function AIResourcesTable() {
  return (
    <>
      <DataTable columns={columns} data={AIResources as AIResource[]} />
    </>
  );
}
