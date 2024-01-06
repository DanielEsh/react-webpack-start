import { Fragment, useState } from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useGetWarehouseProductsQuery } from 'entities/warehouse/api/queries/use-get-warehouse-products-query'
import { Button, Table, Modal } from 'shared/ui-kit'
import { DataTablePageCounter } from 'shared/ui/data-table/data-table-page-counter'
import { Pagiantion } from 'shared/ui-kit/Pagiantion/Pagination'
import { useDisclosure } from 'shared/lib/hooks/useDisclosure'
import { DataTableBody } from 'shared/ui/data-table/data-table-body'
import { warehouseProductsTableColumns } from './warehouse-products-table-columns'
import { WarehouseProductsCreateForm } from './create/warehouse-products-create-form'
import { useDataTableViewState } from 'widgets/data-table-view/use-data-table-view-state'

interface Props {
  id: number
}

export const WarehouseProductsTable = ({ id }: Props) => {
  const { state, changePage } = useDataTableViewState()

  const { data } = useGetWarehouseProductsQuery(id, {
    params: {
      page: state.page,
      limit: state.limit,
    },
  })

  const [opened, { open, close }] = useDisclosure()

  const table = useReactTable({
    data: data?.content || [],
    columns: warehouseProductsTableColumns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <>
      {data && (
        <div>
          <Table className="min-h-[308px]">
            <Table.Head>
              {table.getHeaderGroups().map((headerGroup) => (
                <Table.Row
                  key={headerGroup.id}
                  className="hover:bg-white"
                >
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
              <DataTableBody
                rows={table.getRowModel().rows}
                columnsLength={table.getAllColumns().length}
              />
            </Table.Body>
          </Table>

          <div className="mt-3.5 flex items-center justify-between">
            <Button onClick={open}>Добавить</Button>

            <div className="flex gap-3">
              {data.meta.pagination.totalPages > 1 && (
                <>
                  <DataTablePageCounter
                    totalPages={data.meta.pagination.totalPages}
                    currentPage={data.meta.pagination.page}
                  />

                  <Pagiantion
                    totalPages={data.meta.pagination.totalPages}
                    currentPage={data.meta.pagination.page}
                    onChange={changePage}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <Modal open={opened}>
        <WarehouseProductsCreateForm
          warehouseId={id}
          onCancel={close}
        />
      </Modal>
    </>
  )
}
