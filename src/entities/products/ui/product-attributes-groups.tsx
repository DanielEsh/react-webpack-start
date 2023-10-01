import {
  ColumnDef,
  ExpandedState,
  Row,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Fragment, ReactNode, useState } from 'react'
import { Button, Table } from 'shared/ui-kit'

interface ProductAttributesGroup {
  name: string
  count: number
}

const getColumns: ColumnDef<ProductAttributesGroup>[] = [
  {
    id: 'name',
    accessorFn: ({ name }) => name,
    header: 'Название',
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'count',
    accessorFn: ({ count }) => count,
    header: 'Количество',
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'expander',
    header: () => null,
    cell: ({ row }) => {
      return row.getCanExpand() ? (
        <Button
          size="xs"
          variant="ghost"
          onClick={row.getToggleExpandedHandler()}
        >
          {row.getIsExpanded() ? 'hide' : 'show'}
        </Button>
      ) : (
        '🔵'
      )
    },
  },
]

const data: any[] = [
  {
    name: 'Группа атрибутов 1',
    count: 23,
  },
  {
    name: 'Группа атрибутов 2',
    count: 1,
  },
]

const renderSubComponent = ({ row }: { row: Row<any> }) => {
  return (
    <div>
      <pre style={{ fontSize: '10px' }}>
        <code>{JSON.stringify(row.original, null, 2)}</code>
      </pre>

      <Button variant="ghost">Связать с атрибутом</Button>
    </div>
  )
}

export const ProductsAttributesGroups = () => {
  const [expanded, setExpanded] = useState<ExpandedState>({
    0: true,
  })

  const table = useReactTable({
    data: data,
    columns: getColumns,
    state: {
      expanded,
    },
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: () => true,
  })

  return (
    <div className="mt-4 px-6">
      <Table>
        <Table.Head>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.ColumnHeader key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </Table.ColumnHeader>
              ))}
            </Table.Row>
          ))}
        </Table.Head>

        <Table.Body>
          {table.getRowModel().rows.map((row) => {
            return (
              <Fragment key={row.id}>
                <tr>
                  {/* first row is a normal row */}
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    )
                  })}
                </tr>
                {row.getIsExpanded() && (
                  <tr>
                    {/* 2nd row is a custom 1 cell row */}
                    <td colSpan={row.getVisibleCells().length}>
                      {renderSubComponent({ row })}
                    </td>
                  </tr>
                )}
              </Fragment>
            )
          })}
        </Table.Body>
      </Table>

      <div className="mt-4">
        <Button variant="ghost">Добавить группу атрибутов</Button>
      </div>
    </div>
  )
}
