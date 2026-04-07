import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { DataTable } from "./data-table";

vi.mock("./filter-state-header", () => ({
  FilterStateHeader: ({
    tag,
    onCloseClick,
  }: {
    tag?: string;
    onCloseClick?: (e: React.SyntheticEvent) => void;
  }) => (
    <div data-testid="filter-state-header">
      <span>Filtered by: {tag}</span>
      <button onClick={(e) => onCloseClick?.(e)}>Clear filters</button>
    </div>
  ),
}));

type Row = { name: string; tags: string[]; addedOn: string };

const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "tags",
    header: "Tags",
    filterFn: "arrIncludesAll",
    cell: ({ row, column }) => {
      const tag = row.original.tags[0];
      return <button onClick={() => column.setFilterValue([tag])}>{tag}</button>;
    },
  },
  {
    accessorKey: "addedOn",
    header: "Date Added",
    cell: ({ row }) => <span>{(row.original as any).addedOn}</span>,
  },
];

describe("DataTable", () => {
  it("shows empty state when data is empty", () => {
    render(<DataTable columns={columns} data={[]} />);
    expect(screen.getByText("No results.")).toBeInTheDocument();
  });

  it("shows and clears tag filter state from interactions", () => {
    const data: Row[] = [
      { name: "Alpha Tool", tags: ["alpha"], addedOn: "2024-01-02" },
      { name: "Beta Tool", tags: ["beta"], addedOn: "2023-12-15" },
    ];

    render(<DataTable columns={columns} data={data} />);

    expect(screen.queryByTestId("filter-state-header")).not.toBeInTheDocument();
    expect(screen.getByText("Alpha Tool")).toBeInTheDocument();
    expect(screen.getByText("Beta Tool")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "alpha" }));

    expect(screen.getByTestId("filter-state-header")).toBeInTheDocument();
    expect(screen.getByText("Filtered by: alpha")).toBeInTheDocument();
    expect(screen.getByText("Alpha Tool")).toBeInTheDocument();
    expect(screen.queryByText("Beta Tool")).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Clear filters" }));

    expect(screen.queryByTestId("filter-state-header")).not.toBeInTheDocument();
    expect(screen.getByText("Alpha Tool")).toBeInTheDocument();
    expect(screen.getByText("Beta Tool")).toBeInTheDocument();
  });
});
