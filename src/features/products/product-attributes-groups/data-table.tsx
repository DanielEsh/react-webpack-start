import { Fragment, useState } from 'react'
import { ProductAttribute, ProductAttributesGroup } from './types'
import {
  ExpandedState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  Row,
  useReactTable,
} from '@tanstack/react-table'
import { Button, Table } from 'shared/ui-kit'
import { AttributesList } from './attributes-list'
import { getColumns } from './data-table-columns'
import { classNames } from 'shared/utils'
import { useGetAttributes } from 'entities/attributes'

interface Props {
  data: ProductAttributesGroup[]
  onChange(attributeGroups: ProductAttributesGroup[]): void
}

export const ProductAttributesGroupsTable = ({
  data: externalData,
  onChange,
}: Props) => {
  const [data, setData] = useState<ProductAttributesGroup[]>(externalData)
  const [editedRows, setEditedRows] = useState({})
  const [expanded, setExpanded] = useState<ExpandedState>({
    0: true,
  })

  const {
    isLoading,
    isError,
    data: attributes,
  } = useGetAttributes({
    page: 1,
    limit: 100,
  })

  const handleRemoveRow = (rowIndex: number) => {
    const setFilterFunc = (old: ProductAttributesGroup[]) =>
      old.filter(
        (_row: ProductAttributesGroup, index: number) => index !== rowIndex,
      )
    setData(setFilterFunc)
  }

  const handleUpdateRow = (
    rowIndex: number,
    columnId: number,
    value: number,
  ) => {
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

  const table = useReactTable<any>({
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
    onChange(data)

    setEditedRows({
      [data.length]: true,
    })
  }

  const handleAddClick = (index: number) => {
    const updatedAttributesGroup = [...data]

    updatedAttributesGroup[index].attributes.push({
      attributeId: undefined,
      value: '',
    })

    setData(updatedAttributesGroup)
  }

  const handleAttributesChange = (
    attributes: ProductAttribute[],
    groupIndex: number,
  ) => {
    const updatedAttributesData = [...data]
    updatedAttributesData[groupIndex].attributes = attributes

    console.log('update', updatedAttributesData)
    setData(updatedAttributesData)
  }

  const activeClasses = (row: Row<ProductAttributesGroup>) =>
    classNames({
      'bg-gray-50': row.getIsExpanded(),
    })

  return (
    <div className="mt-4 px-6">
      <Table>
        <Table.Head>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Fragment key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </Fragment>
              ))}
            </Table.Row>
          ))}
        </Table.Head>

        <Table.Body>
          {table.getRowModel().rows.map((row) => {
            return (
              <Fragment key={row.id}>
                <Table.Row>
                  {/* first row is a normal row */}
                  {row.getVisibleCells().map((cell) => (
                    <Table.Cell
                      key={cell.id}
                      className={activeClasses(row)}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Table.Cell>
                  ))}
                </Table.Row>
                {row.getIsExpanded() && (
                  <Table.Row>
                    {/* 2nd row is a custom 1 cell row */}
                    <Table.Cell
                      colSpan={row.getVisibleCells().length}
                      className={activeClasses(row)}
                    >
                      <AttributesList
                        attributes={data[row.index].attributes}
                        attributesOptions={attributes?.content}
                        onAddClick={() => handleAddClick(row.index)}
                        onChange={(e) => handleAttributesChange(e, row.index)}
                      />
                    </Table.Cell>
                  </Table.Row>
                )}
              </Fragment>
            )
          })}
        </Table.Body>
      </Table>

      <div className="mt-4">
        <Button onClick={handleAddAttributeGroup}>
          Добавить группу атрибутов
        </Button>
      </div>

      <pre className="bg-slate-950 mt-2 w-[340px] rounded-md p-4">
        <code className="text-black">{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  )
}
