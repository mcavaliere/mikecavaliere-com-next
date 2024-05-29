import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import { Link } from "@/components/Link";

import resources from "../data/ai-resources.json";

export function AIResourcesTable() {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Tags</Th>
            <Th>Links</Th>
          </Tr>
        </Thead>
        <Tbody>
          {resources.map((r, i) => {
            const href = r.githubUrl ? r.githubUrl : r.websiteUrl;
            return (
              <Tr key={i}>
                <Td>
                  <Link href={href} target="_blank" textDecoration="underline">
                    {r.name}
                  </Link>
                </Td>
                <Td>{r.description}</Td>
                <Td>{r.tags.join(", ")}</Td>
                <Td>
                  {r.websiteUrl && (
                    <Link href={r.websiteUrl} target="_blank" textDecoration="underline">
                      Website
                    </Link>
                  )}
                  {r.githubUrl && (
                    <Link href={r.githubUrl} target="_blank" textDecoration="underline">
                      GitHub
                    </Link>
                  )}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
