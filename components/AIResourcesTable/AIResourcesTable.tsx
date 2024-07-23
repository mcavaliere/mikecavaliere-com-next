import { AIResources } from "../../data/ai-resources";
import { columns } from "./columns";
import { DataTable } from "./DataTable";
import { AIResource } from "./types";

export function AIResourcesTable() {
  const resources = AIResources.filter((r) => !["articles", "learning"].includes(r.category));

  return (
    <>
      <DataTable columns={columns} data={resources} />
    </>
  );
}
