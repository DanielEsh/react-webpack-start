import { ColumnDef } from "@tanstack/react-table";
import { Collection } from "entities/collection/types";
import { CollectionDataTableColumnHeader } from "entities/collection/ui/data-table/collection-data-table-column-header";
import { Table } from "shared/ui-kit/table";
import { ReactNode } from "react";
import { CollectionsDataTableRowActions } from "entities/collection/ui/data-table/collection-data-table-row-actions";

export const columns: ColumnDef<Collection>[] = [
  {
    id: 'id',
    accessorKey: 'id',
    header: ({ column }) => (
      <CollectionDataTableColumnHeader
        column={column}
        title="id"
      />
    ),
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'slug',
    accessorFn: ({ slug }) => slug,
    header: ({ column }) => (
      <CollectionDataTableColumnHeader
        column={column}
        title="slug"
      />
    ),
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'name',
    accessorFn: ({ name }) => name,
    header: ({ column }) => (
      <CollectionDataTableColumnHeader
        column={column}
        title="name"
      />
    ),
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'goodsCount',
    accessorFn: ({ goodsCount }) => goodsCount,
    header: ({ column }) => (
      <CollectionDataTableColumnHeader
        column={column}
        title="goods count"
      />
    ),
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'actions',
    header: ({ column }) => (
      <CollectionDataTableColumnHeader
        column={column}
        title="actions"
      />
    ),
    cell: ({ row }) => <CollectionsDataTableRowActions row={row} />,
    enableSorting: false,
  },
]
