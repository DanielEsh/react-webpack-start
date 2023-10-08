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
  const [attributeGroupsData, setAttributesGroupsData] =
    useState<ProductAttributesGroup[]>(externalData)
  const [editedRows, setEditedRows] = useState({})
  const [expanded, setExpanded] = useState<ExpandedState>({})

  const { data: attributes } = useGetAttributes({
    page: 1,
    limit: 100,
  })

  const handleRemoveRow = (rowIndex: number) => {
    const removeRowFn = (state: ProductAttributesGroup[]) =>
      state.filter((_, index: number) => index !== rowIndex)

    const updateData = removeRowFn(attributeGroupsData)

    onChange(updateData)
    setAttributesGroupsData(updateData)
  }

  const handleUpdateRow = (
    rowIndex: number,
    columnId: number,
    value: number,
  ) => {
    const updateFn = (state: ProductAttributesGroup[]) =>
      state.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...row,
            [columnId]: value,
          }
        }
        return row
      })

    const updateData = updateFn(attributeGroupsData)

    onChange(updateData)
    setAttributesGroupsData(updateData)
  }

  const table = useReactTable({
    data: attributeGroupsData,
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

  const addAttributesGroup = () => {
    const createdRow: ProductAttributesGroup = {
      name: '',
      attributes: [],
    }
    const setStateFn = (state: ProductAttributesGroup[]) => [
      ...state,
      createdRow,
    ]

    const updateData = setStateFn(attributeGroupsData)

    setAttributesGroupsData(updateData)
    onChange(updateData)

    setEditedRows({
      [attributeGroupsData.length]: true,
    })
  }

  const addAttributeInGroupByIndex = (index: number) => {
    const updatedAttributesGroup = [...attributeGroupsData]

    updatedAttributesGroup[index].attributes.push({
      attributeId: undefined,
      value: '',
    })

    setAttributesGroupsData(updatedAttributesGroup)
    onChange(updatedAttributesGroup)
  }

  const updatedAttributesInGroupByIndex = (
    attributes: ProductAttribute[],
    groupIndex: number,
  ) => {
    const updatedAttributesData = [...attributeGroupsData]
    updatedAttributesData[groupIndex].attributes = attributes

    setAttributesGroupsData(updatedAttributesData)
    onChange(updatedAttributesData)
  }

  const activeClasses = (row: Row<ProductAttributesGroup>) =>
    classNames({
      'bg-gray-50': row.getIsExpanded(),
    })

  return (
    <div className="mt-4">
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
                        attributes={attributeGroupsData[row.index].attributes}
                        attributesOptions={attributes?.content}
                        onAddClick={() => addAttributeInGroupByIndex(row.index)}
                        onChange={(attributes) =>
                          updatedAttributesInGroupByIndex(attributes, row.index)
                        }
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
        <Button onClick={addAttributesGroup}>Добавить группу атрибутов</Button>
      </div>

      <pre className="bg-slate-950 mt-2 w-[340px] rounded-md p-4">
        <code className="text-black">
          {JSON.stringify(attributeGroupsData, null, 2)}
        </code>
      </pre>
    </div>
  )
}
