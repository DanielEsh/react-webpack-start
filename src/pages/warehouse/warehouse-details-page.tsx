import { Button, Drawer, Form } from 'shared/ui-kit'
import { DrawerHeader } from 'shared/ui-kit/drawer/drawer-header'
import { ProductAttributesGroups } from 'features/products/product-attributes-groups'
import { DrawerFooter } from 'shared/ui-kit/drawer/drawer-footer'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetWarehouseByIdQuery } from 'entities/warehouse/api/queries'
import {
  WarehouseForm,
  warehouseFormSchema,
} from 'entities/warehouse/ui/form/warehouse-form-schema'
import { WarehouseFormFields } from 'entities/warehouse/ui/form/warehouse-form-fields'
import { useForm } from 'shared/ui-kit/form/use-form'
import { useNotification } from 'shared/notification'
import { useUpdateWarehouseByIdMutate } from 'entities/warehouse/api/queries/use-update-warehouse-by-id-mutate'
import { WarehouseDto } from 'entities/warehouse/api/dto'
import { useEffect } from 'react'
import { WarehouseProductsTable } from 'entities/warehouse/ui/warehouse-products-table'

export default function WarehouseDetailsPage() {
  const { id } = useParams<{
    id: string
  }>()

  if (!id) return

  const navigate = useNavigate()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { isLoading, isSuccess, isError, data } = useGetWarehouseByIdQuery(id)
  const { mutateAsync: updateWarehouseByIdMutate } =
    useUpdateWarehouseByIdMutate()
  const { showNotification } = useNotification()

  const defaultValues: WarehouseForm = {
    name: data?.name ?? '',
  }

  const close = () => {
    navigate('/warehouses')
  }

  const formMethods = useForm(warehouseFormSchema, defaultValues)

  const { setValue } = formMethods

  useEffect(() => {
    if (data) {
      setValue('name', data.name)
    }
  }, [data])

  const handleSuccessUpdate = (data: WarehouseDto) => {
    showNotification({
      id: data.id,
      title: 'Успешное обновление склада',
      message: `Склад ${data.name} успешно обновлен`,
    })
    close()
  }

  const handleSubmit = async (form: any) => {
    await updateWarehouseByIdMutate(
      {
        form,
        id: id ? +id : 0,
      },
      {
        onSuccess: handleSuccessUpdate,
      },
    )
  }

  return (
    <Drawer
      open
      onOpenChange={close}
    >
      <Form
        className="flex h-full flex-col"
        methods={formMethods}
        onSubmit={handleSubmit}
      >
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error</div>}

        {isSuccess && (
          <>
            <DrawerHeader>
              <h2>Update warehouse</h2>
            </DrawerHeader>

            <div className="flex flex-col gap-4 px-6">
              <WarehouseFormFields />
              <WarehouseProductsTable id={+id} />
            </div>

            <DrawerFooter>
              <div className="flex gap-2 px-4 pb-6">
                <Button
                  type="submit"
                  variant="primary"
                >
                  Update
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  onClick={close}
                >
                  Cancel
                </Button>
              </div>
            </DrawerFooter>
          </>
        )}
      </Form>
    </Drawer>
  )
}
