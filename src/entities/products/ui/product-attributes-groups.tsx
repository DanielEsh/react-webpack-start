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

interface ProductAttribute {
  name: string
  value: string
}

interface ProductAttributesGroup {
  name: string
  count: number
  attributes: ProductAttribute[]
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

const data: ProductAttributesGroup[] = [
  {
    name: 'Группа атрибутов 1',
    count: 23,
    attributes: [
      {
        name: 'attribute-name',
        value: 'attribute-value',
      },
    ],
  },
  {
    name: 'Группа атрибутов 2',
    count: 1,
    attributes: [],
  },
]

interface Props {
  attributes: ProductAttribute[]
  onAddClick(): void
}

const SubComponent = ({ attributes, onAddClick }: Props) => {
  return (
    <div>
      {attributes.map((attribute, index) => (
        <div key={index}>
          <div>name: {attribute.name}</div>
          <div>value: {attribute.value}</div>
        </div>
      ))}

      <Button
        variant="ghost"
        onClick={onAddClick}
      >
        Связать с атрибутом
      </Button>
    </div>
  )
}

export const ProductsAttributesGroups = () => {
  const [stateData, setStateData] = useState(data)

  const [expanded, setExpanded] = useState<ExpandedState>({
    0: true,
  })

  const table = useReactTable({
    data: stateData,
    columns: getColumns,
    state: {
      expanded,
    },
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: () => true,
  })

  const handleAddClick = (index: number) => {
    console.log('addClick', index)
  }

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
                      <SubComponent
                        attributes={row.original.attributes}
                        onAddClick={() => handleAddClick(row.index)}
                      />
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
