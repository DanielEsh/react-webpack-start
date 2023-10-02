import { Fragment, useState } from 'react'
import { ProductAttributesGroup } from './types'
import {
  ExpandedState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Button, Table } from 'shared/ui-kit'
import { AttributesList } from './attributes-list'
import { getColumns } from './data-table-columns'
import { ProductAttributesGroupsTableEditableCell } from './editable-cell'

interface Props {
  data: ProductAttributesGroup[]
}

export const ProductAttributesGroupsTable = ({ data: externalData }: Props) => {
  const [data, setData] = useState<ProductAttributesGroup[]>(externalData)
  const [editedRows, setEditedRows] = useState({})
  const [expanded, setExpanded] = useState<ExpandedState>({
    0: true,
  })

  const handleRemoveRow = (rowIndex: number) => {
    const setFilterFunc = (old: ProductAttributesGroup[]) =>
      old.filter(
        (_row: ProductAttributesGroup, index: number) => index !== rowIndex,
      )
    setData(setFilterFunc)
  }

  const handleUpdateRow = (rowIndex, columnId, value) => {
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex]!,
            [columnId]: value,
          }
        }
        return row
      }),
    )
  }

  const table = useReactTable({
    data,
    columns: getColumns,
    state: {
      expanded,
    },
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getRowCanExpand: () => true,
    meta: {
      editedRows,
      setEditedRows,
      removeRow: handleRemoveRow,
      updateData: handleUpdateRow,
    },
  })

  const handleAddAttributeGroup = () => {
    const newRow: ProductAttributesGroup = {
      name: '',
      attributes: [],
    }
    const setFunc = (old: ProductAttributesGroup[]) => [...old, newRow]
    setData(setFunc)

    setEditedRows({
      [data.length]: true,
    })
  }

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
                      <AttributesList
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
        <Button
          variant="ghost"
          onClick={handleAddAttributeGroup}
        >
          Добавить группу атрибутов
        </Button>
      </div>
    </div>
  )
}
