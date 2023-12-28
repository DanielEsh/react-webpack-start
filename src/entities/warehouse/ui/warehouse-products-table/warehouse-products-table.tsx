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
import { useState } from 'react'
import { Modal } from 'shared/ui-kit/modal'
import { useDisclosure } from 'shared/lib/hooks/useDisclosure'
import { ProductSelect } from 'entities/products/ui/product-select'
import {
  warehouseProductSchema,
  WarehouseProductsForm,
} from 'entities/warehouse/ui/warehouse-products-table/warehouse-product-schema'
import { useCreateWarehouseProductMutation } from 'entities/warehouse/api/queries/use-create-warehouse-product-mutation'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { ModalContent } from 'shared/ui-kit/modal/modal-content'

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

  const { setValue } = formMethods

  const { mutate: createWarehouseProduct } = useCreateWarehouseProductMutation()

  const handleEditActions = (item: any) => {
    console.log('handle edit action', item)
    setValue('productId', item.product.id)
    setValue('quantity', item.quantity)
    open()
  }

  const table = useReactTable({
    data: data?.content || [],
    columns: warehouseProductsTableColumns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      rowActions: {
        edit: handleEditActions,
      },
    },
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

  const change = (isOpen: boolean) => {
    console.log('change', isOpen)
    if (isOpen) {
      open()
    } else {
      close()
    }
  }

  return (
    <>
      {data && (
        <div>
          <Table>
            <Table.Head>
              {table.getHeaderGroups().map((headerGroup) => (
                <Table.Row key={headerGroup.id}>
                  {headerGroup.headers.map((header) =>
                    header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        ),
                  )}
                </Table.Row>
              ))}
            </Table.Head>
            <Table.Body>
              {table.getRowModel().rows?.length ? (
                table
                  .getRowModel()
                  .rows.map((row) => (
                    <Table.Row key={row.id}>
                      {row
                        .getVisibleCells()
                        .map((cell) =>
                          flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          ),
                        )}
                    </Table.Row>
                  ))
              ) : (
                <Table.Row>
                  <Table.Cell className="h-[308px] text-center">
                    No results.
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table>

          <div>
            <Button onClick={open}>Добавить</Button>

            <DialogPrimitive.Root>
              <DialogPrimitive.Trigger>
                <Button>Добавить (Dialog)</Button>
              </DialogPrimitive.Trigger>

              <ModalContent>
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

                    <DialogPrimitive.DialogClose asChild>
                      <Button>Close (Dialog)</Button>
                    </DialogPrimitive.DialogClose>
                  </div>
                </Form>
              </ModalContent>
            </DialogPrimitive.Root>
          </div>

          <div className="flex justify-end">
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
      )}

      <Modal
        open={opened}
        onOpenChange={change}
      >
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

            <DialogPrimitive.DialogClose>
              <Button onClick={close}>Cancel</Button>
            </DialogPrimitive.DialogClose>
          </div>
        </Form>
      </Modal>
    </>
  )
}
