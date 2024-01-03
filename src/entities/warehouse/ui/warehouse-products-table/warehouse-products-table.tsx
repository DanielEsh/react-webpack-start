import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useGetWarehouseProductsQuery } from 'entities/warehouse/api/queries/use-get-warehouse-products-query'
import { warehouseProductsTableColumns } from 'entities/warehouse/ui/warehouse-products-table/warehouse-products-table-columns'
import { Button, Form, InputNumber, Table } from 'shared/ui-kit'
import { useForm } from 'shared/ui-kit/form/use-form'
import { DataTablePageCounter } from 'shared/ui/data-table/data-table-page-counter'
import { Pagiantion } from 'shared/ui-kit/Pagiantion/Pagination'
import { Fragment, useState } from 'react'
import { Modal } from 'shared/ui-kit/modal'
import { useDisclosure } from 'shared/lib/hooks/useDisclosure'
import { ProductSelect } from 'entities/products/ui/product-select'
import {
  warehouseProductSchema,
  WarehouseProductsForm,
} from 'entities/warehouse/ui/warehouse-products-table/warehouse-product-schema'
import { useCreateWarehouseProductMutation } from 'entities/warehouse/api/queries/use-create-warehouse-product-mutation'
import { DataTableBody } from 'shared/ui/data-table/data-table-body'

interface Props {
  id: number
}

export const WarehouseProductsTable = ({ id }: Props) => {
  const [tableValues, setTableValues] = useState<any>({
    page: 1,
    limit: 5,
  })

  const { data } = useGetWarehouseProductsQuery(id, {
    params: {
      page: tableValues.page,
      limit: tableValues.limit,
    },
  })

  const [opened, { open, close }] = useDisclosure()
  const formMethods = useForm(warehouseProductSchema)

  const { mutate: createWarehouseProduct } = useCreateWarehouseProductMutation()

  const table = useReactTable({
    data: data?.content || [],
    columns: warehouseProductsTableColumns,
    getCoreRowModel: getCoreRowModel(),
  })

  const handleSubmit = (warehouseProductForm: WarehouseProductsForm) => {
    createWarehouseProduct({
      warehouseId: id,
      createWarehouseProductDto: warehouseProductForm,
    })
    close()
  }

  const handlePagination = (page: any) => {
    setTableValues((state) => ({
      ...state,
      page,
    }))
  }

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
                    onChange={handlePagination}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      )}

      <Modal open={opened}>
        <Form
          methods={formMethods}
          className="p-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-3">
            <Form.Field name="productId">
              <ProductSelect />
            </Form.Field>

            <Form.Field name="quantity">
              <InputNumber label="quantity" />
            </Form.Field>
          </div>

          <div className="mt-3.5 flex gap-3">
            <Button
              type="submit"
              variant="primary"
            >
              Submit
            </Button>

            <Button onClick={close}>Cancel</Button>
          </div>
        </Form>
      </Modal>
    </>
  )
}
